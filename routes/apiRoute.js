const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
let db = require("../db/db.json");
const fs = require("fs");

router.get("/notes", (req, res) => {
  db = JSON.parse(fs.readFileSync("./db/db.json", "utf-8"));
  res.json(db);
});

router.post("/notes", (req, res) => {
  const { title, text } = req.body;
  const newNote = {
    title: title,
    text: text,
    id: uuidv4(),
  };

  db.push(newNote);
  fs.writeFileSync("db/db.json", JSON.stringify(db));

  res.json(db);
});

router.delete("/notes/:id", (req, res) => {
  let db = JSON.parse(fs.readFileSync("db/db.json"));
  let trashNote = db.filter((item) => item.id !== req.params.id);
  fs.writeFileSync("db/db.json", JSON.stringify(trashNote));
  res.json(trashNote);
});

module.exports = router;
