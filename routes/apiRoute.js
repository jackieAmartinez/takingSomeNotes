// const path = require("path");

// const fs = require("fs");
// const express = require("express");

// // parses the json for some reason
// const db = require('../db/db.json');

// // unique id
// const { v4: uuidv4 } = require('uuid');


// const route = require('express').Router();

// // const router = require('express').Router();

// // sends/displays homepage
// route.get("/", (req, res) => {
//    res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// // sends/displays homepage
// route.get("/notes", (req, res) => {
//    res.sendFile(path.join(__dirname, '../public/notes.html'));
// });

// // sends/displays notes
// route.get("/api/notes", (req, res) => {
//    // fs.readfile("../db/db.json", (err, data) => {
//       res.json(db);
//    // })
// });

// route.post("./api/notes", (req, res) => {
//    const { title, text } = req.body;
//    const whatsNew = {
//       title: title,
//       text: text,
//       id: uuidv4(),
//    };
    
//    let motherShip = db;
//    motherShip.push(whatsNew);
//    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(motherShip));

//    const scuttleButt = {
//       status: "Great Success",
//       body: whatsNew,
//    };
 
//    res.json(scuttleButt);
// });

// route.delete("/api/notes/:id", (req, res) => {
//    const id = req.params.id;
//    for (let i = 0; i < db.length; i++) {
//       if (db[i].id === id) {db.splice(i, 1)}
//    };
//    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db))
//    res.send(`Success - Note #${id} has been deleted`);
// });

// module.exports = route;





const path = require('path');
const fs = require('fs');
const router = require('express').Router();
let db = require('../db/db.json')
//const uuid = require('uuid');
const { v4: uuidv4 } = require("uuid");

router.get('./notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

router.get('./', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

router.get('./api/notes', (req, res) => {
    console.log(db)
    db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"))
        res.json(db)
    });

router.post('/api/notes', (req, res) => {
    const {title, text} = req.body; 
    const newNote = {
        title: title,
        text: text,
        id: uuidv4()
    };
   
    db.push(newNote);
    fs.writeFileSync('./db/db.json', 
    JSON.stringify(db));
    
    res.json(db);
 });

router.delete('/api/notes/:id', (req, res) => {
    let db = JSON.parse(fs.readFileSync('./db/db.json'))
    let trashNote = db.filter(item => item.id != req.params.id);
    fs.writeFileSync('./db/db.json', JSON.stringify(trashNote));
    res.json(trashNote);
});

module.exports = router;