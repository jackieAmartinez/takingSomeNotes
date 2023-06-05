const express = require("express");
const fs = require("fs");
const path = require("path");

// parses the json for some reason
const db = require('../db/db.json');

// unique id
const { v4: uuidv4 } = require('uuid');

const router = require('express').Router();

// const router = require('express').Router();

// sends/displays homepage
router.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, '../public/index.html'));
});

// sends/displays homepage
router.get("/notes", (req, res) => {
   res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// sends/displays notes
router.get("/api/notes", (req, res) => {
   // fs.readfile("../db/db.json", (err, data) => {
      res.json(db);
   // })
});

router.post("./api/notes", (req, res) => {
   const { title, text } = req.body;
   const whatsNew = {
      title: title,
      text: text,
      id: uuidv4(),
   };
    
   let motherShip = db;
   motherShip.push(whatsNew);
   fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(motherShip));

   const scuttleButt = {
      status: "Great Success",
      body: whatsNew,
   };
 
   res.json(scuttleButt);
});

router.delete("/api/notes/:id", (req, res) => {
   const id = req.params.id;
   for (let i = 0; i < db.length; i++) {
      if (db[i].id === id) {db.splice(i, 1)}
   };
   fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(db))
   res.send(`Success - Note #${id} has been deleted`);
});

module.exports = route;