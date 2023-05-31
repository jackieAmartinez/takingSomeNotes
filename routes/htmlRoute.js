// path declarations
const path = require('path');

// "/notes" responds with the notes.html file
// All other routes respond with the index.html file

// sends/displays homepage
route.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// displays homepage
route.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = (app) => {
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
};