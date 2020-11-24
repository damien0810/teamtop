const express = require("express");
const nunjucks = require("nunjucks");
const app = express();

nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.get("/", (req, res) => {
  res.render("/pages/home");
});

app.get("/:numOne", (req, res) => {
  //res.send(req.params.numOne + req.params.numDeux);
  const elements = {
    bjorg: req.params.numOne,
    martin: "https://picsum.photos/id/237/200/" + req.params.numOne,
    damien: [1, 2, 44444],
  };
  res.render("var_file", elements);
});

console.log("Listening on port http://localhost:3000");
app.listen(3000);
