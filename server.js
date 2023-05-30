// example code
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;


// set up body parsing, static, and route middleware
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use('/api', apiRoutes);

app.use('/', htmlRoutes);

// start the server on the port
app.listen(PORT, () => {
    console.log('Server available at local${PORT}');
});