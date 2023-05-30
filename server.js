// example code and further declarations/imports
const express = require('express');
const path = require('path');
const fs = require('fs');
const db = require('./db/db.json');
const route = require("./routes/routes")

// initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// set up data formats (body parsing, static, and route middleware) so that express can parse
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/api', apiRoutes);
app.use('/', route);

app.use(express.static('public'));

// notifies express to listen for activity, so that the server on the port can start
app.listen(PORT, () => {
    console.log('You did it! Server available at local${PORT}');
});