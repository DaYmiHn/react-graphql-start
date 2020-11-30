const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
const PORT = 3005;

app.use(cors())

mongoose.connect("mongodb://localhost:27017/", { useNewUrlParser: true , useUnifiedTopology: true})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log('Error'))
dbConnection.on('open', err => console.log('Started Mongo')) 

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
