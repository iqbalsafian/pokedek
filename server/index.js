const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const sqlite3 = require('sqlite3').verbose();
const DBSOURCE = "pokemon.sql";
var dbError = false;
const db = new sqlite3.Database(DBSOURCE, err => {
  if (err) {
    dbError = true
  }
})

app.get("/", (req, res) => {
  const sql = "SELECT * FROM pokemon";
  let params = [];
  console.log('requested');

  if (dbError) {
    res.status(400).json({ "error": "connecting to db" })
      return;
  } else {
    db.all(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({ "error": err.message })
        return;
      }
      res.json({
        "message": "success",
        "data": rows
      })
    })
  }
});

app.listen(8882, () => {
  console.log('server is running');
})