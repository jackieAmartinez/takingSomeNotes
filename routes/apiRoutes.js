// path declarations
const path = require('path');
const fs = require('fs')

const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');
const express = require('express');



module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../db/db.json'));
    })

app.post('/api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

app.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('db/db.json'))
    let removeNote = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(removeNote));
    res.json(removeNote);
});
};