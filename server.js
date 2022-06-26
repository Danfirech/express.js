const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("here");
  res.status(500).send("HI");
});

app.listen(3000);
