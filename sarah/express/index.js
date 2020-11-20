const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});
app.get("/home", function (req, res) {
  res.send("Welcome");
});

app.get("/default", function (req, res) {
  res.send(req.query);
});
app.get("/pokemon/:pikachu", function (req, res) {
    res.send(req.params.pikachu);
  });
app.get("/:mario/:zelda", function (req, res) {
  res.send(`${req.params.mario} and ${req.params.zelda}`);
});

console.log("Listening on http://localhost:3000");

app.listen(3000);
