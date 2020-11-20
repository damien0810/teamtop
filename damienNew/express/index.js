const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/pokemon", function (req, res) {
  res.send("pikachu");
});

app.get("/:plop/plopi", function (req, res) {
  res.send(`${req.params.plop} ${req.params.plopi}`);
});

console.log("Listening on http://localhost:8080");
app.listen(8080);
