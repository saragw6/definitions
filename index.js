const express = require('express');
const path = require('path');
//var enforce = require('express-sslify');

//var redirectToHTTPS = require('express-http-to-https').redirectToHTTPS
function redirectToHTTPS (ignoreHosts = [], ignoreRoutes = [], redirectCode = 302) {
  return function middlewareRedirectToHTTPS (req, res, next) {
    const isNotSecure = (!req.get('x-forwarded-port') && req.protocol !== 'https') ||
      parseInt(req.get('x-forwarded-port'), 10) !== 443 &&
        (parseInt(req.get('x-forwarded-port'), 10) === parseInt(req.get('x-forwarded-port'), 10))

    if (isNotSecure) {
      console.log("https host: " + req.get('host'));
      console.log("https url: " + req.url);
      return res.redirect(redirectCode, 'https://' + req.get('host') + req.url)
    }

    next()
  }
}


const app = express();
const mountRoutes = require('./routes')
mountRoutes(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//use validator?

const db_url = "postgres://cvbxymodwgcdog:6ca64c4362716069e239320eec8ae06097e66f573126ae33027e5e593fe663d2@ec2-54-243-235-153.compute-1.amazonaws.com:5432/d6i5mdoncrqtm0";

const { Client } = require('pg');
//set up connection to db
const client = new Client({
  connectionString: db_url,
  ssl: true,
});


//client connect inside each endpoint instead?
client.connect();
// enforce.HTTPS({ trustProtoHeader: true });

app.use(function forceLiveDomain(req, res, next) {
  // Don't allow user to hit Heroku now that we have a domain
  var host = req.get('Host');
  if (host === 'queer-undefined.herokuapp.com') {
  	console.log("from 301, orig url: " + req.originalUrl);
  	console.log("from 301, url: " + req.url);
  	console.log('from 301: https://www.queerundefined.com' + req.originalUrl.substring(1));
    return res.redirect(301, 'https://www.queerundefined.com' + req.originalUrl.substring(1));
  }
  return next();
});

app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/]));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Queer Undefined listening on ${port}`);

//module.exports = app.listen(5000);