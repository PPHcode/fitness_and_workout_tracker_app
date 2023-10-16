require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.port

const mongoose = require('mongoose');

app.get('/', (req, res) => {
  res.send('Hello World! hgfjg kkb')
})


const { mongoURI } = require('.env'); // Example: Load URI from a config file

console.log('MongoDB URI:', mongoURI); // Log the URI to verify its value

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

 