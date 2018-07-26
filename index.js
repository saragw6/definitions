const express = require('express');
const path = require('path');

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