// example code and further declarations/imports
const express = require('express');
const app = express();
// const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
// const db = require('./db/db.json');

const db = require('./db/db.json')

const apiRoutes = require("./routes/apiRoute");

// initialize the app and create a port


const { v4: uuidv4 } = require("uuid");
// set up data formats (body parsing, static, and route middleware) so that express can parse
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
// app.use('/api', apiRoutes);NOT NEEDED
// app.use('/api', apiRoutes);NOT NEEDED
app.use('/', apiRoutes);

// notifies express to listen for activity, so that the server on the port can start
app.listen(PORT, () => {
    console.log('You did it! Server available at local${PORT}');
});