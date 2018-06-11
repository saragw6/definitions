const express = require('express');
const path = require('path');

const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//use validator?

// app.use(function (err, req, res, next) {
//   console.log("** in next **");
//   console.error(err.stack);
//   //res.status(500).send('Something broke!');
//   console.log("res status in next: " + res.statusCode);
//   res.sendStatus(err.httpStatusCode).json(err);
  
// })

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

// Put all API endpoints under '/api'
app.post('/api/insert_term/:term', (req, res, next) => {

  var term = req.params.term;

  var queryString = 'INSERT INTO term(term) SELECT \'' + term + '\' WHERE NOT EXISTS (SELECT 1 FROM term WHERE term = \'' + term + '\');';

  client.query(queryString, (err, result) => {
      if (err) {
        console.error(err.stack);
        res.status(500).send('Error while inserting term: ' + term); //could make more specific
        return; //end client?
      } else {
        const response = "added term: " + term;
        res.json(response);
      }
      //client.end();
    });
});

app.post('/api/insert_synonym/:term/:synonym', (req, res, next) => {

  //could also have ON CONSTRAINT fkey --> insert term ?

  var term = req.params.term;
  var synonym = req.params.synonym;

   var queryString = 'INSERT INTO synonym(term, sort_as) VALUES (\'' + term + '\',\'' + synonym + '\') ON CONFLICT ON CONSTRAINT synonym_pkey DO NOTHING;';

  client.query(queryString, (err, result) => {
      if (err) {
        console.error(err.stack);
        res.status(500).send('Error while inserting synonym: ' + term + "\/" + synonym); //could make more specific
        return; //end client?
      } else {
        const response = "added synonym: " + term + "\/" + synonym;
        res.json(response);
      }
      //client.end();
    });
});


app.post('/api/insert_author', (req, res, next) => {

  //could *possibly* use name & ident strings as primary key --> this would mean storing all that data instead of an int in each entry
  //i think you need to make this return an id #

  var name = req.body.name;
  var ident = req.body.identity;

   var queryString = 'INSERT INTO author(name, identity) SELECT \'' + name + '\',\'' + ident + '\' WHERE NOT EXISTS (SELECT 1 FROM author WHERE name = \'' + name + '\' AND identity = \'' + ident + '\');';

  client.query(queryString, (err, result) => {
      if (err) {
        console.error(err.stack);
        res.status(500).send('Error while inserting author: ' + name); //could make more specific
        return; //end client?
      } else {
        const response = "added author: " + name;
        res.json(response);
      }
      //client.end();
    });
});

app.post('/api/insert_entry', (req, res, next) => {

  //take author_id from insert_author response? or send query with author name and id and get the author id in this function?
  //check from duplicate using term and definition, or more? --> more!

  //add code to remove requested terms?

  //how to check same author??????

  var queryString = 'INSERT INTO entry(term, definition, explanation, author) SELECT \'' + req.body.term + '\',\'' + req.body.definition + '\',\'' + req.body.explanation + '\',\'' + req.body.author + '\' WHERE NOT EXISTS (SELECT 1 FROM author WHERE term = \'' + req.body.term + '\' AND definition = \'' + req.body.definition + '\' AND explanation = \'' + req.body.explanation + '\' AND author = \'' + req.body.author + '\');';

  client.query(queryString, (err, result) => {
      if (err) {
        console.error(err.stack);
        res.status(500).send('Error while inserting entry: ' + term); //could make more specific
        return; //end client?
      } else {
        const response = "added entry: " + term;
        res.json(response);
      }
      //client.end();
    });
});

// app.delete('/api/delete_entry', (req, res, next) => {

//   //check from duplicate using term and definition, or more?

//   //add code to remove requested terms?

//   var queryString = 'DELETE FROM entry WHERE term=\'' + req.body.term + '\' AND definition=\'' + req.body.definition + '\' AND \'' + req.body.explanation + '\',\'' + req.body.author + '\' WHERE NOT EXISTS (SELECT 1 FROM author WHERE term = \'' + req.body.term + '\' AND definition = \'' + req.body.definition + '\');';

//   client.query(queryString, (err, result) => {
//       if (err) {
//         console.error(err.stack);
//         res.status(500).send('Error while inserting entry: ' + term); //could make more specific
//         return; //end client?
//       } else {
//         const response = "added entry: " + term;
//         res.json(response);
//       }
//       //client.end();
//     });
// });

app.post('/api/insert_requested/:term', (req, res, next) => {

  var term = req.params.term;

  var queryString = 'INSERT INTO requested(term) VALUES (\'' + term + '\') ON CONFLICT ON CONSTRAINT requested_pkey DO NOTHING;';

  client.query(queryString, (err, result) => {
      if (err) {
        console.error(err.stack);
        res.status(500).send('Error while inserting requested: ' + term); //could make more specific
        return; //end client?
      } else {
        const response = "added requested: " + term;
        res.json(response);
      }
      //client.end();
    });
});

app.delete('/api/delete_requested/:term', (req, res, next) => {

  var term = req.params.term;

  var queryString = 'DELETE FROM requested WHERE term=\'' + term + '\';';

  client.query(queryString, (err, result) => {
      if (err) {
        console.error(err.stack);
        res.status(500).send('Error while deleting requested: ' + term); //could make more specific
        return; //end client?
      } else {
        const response = "deleted requested: " + term;
        res.json(response);
      }
      //client.end();
    });
});


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
//app.listen(port);

console.log(`Queer Undefined listening on ${port}`);

module.exports = app.listen(5000);