var express = require("express");
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get("/", async function (req, res) {
  console.log(res.send);
  res.send("hello world");
});

app.get("/home", function (req, res) {
  console.log(res.send);
  res.send("bienvenue à l'équipe" + req.query.v);
  // v est la clé (v clé est suivie d'une variable)
});

app.get("/theme/:arbre", function (req, res) {
  //console.log(res.send);
  res.send(req.params.arbre);
});
// remarque si on va sur le navigateur
// on modifie article par un autre mot et le nouveau mot s'affiche

app.get("/:article", function (req, res) {
  //console.log(res.send);
  // remarque si on va sur le navigateur
  // on modifie article par un autre mot et le nouveau mot s'affiche
  // surtout mettre ce type de route (par défaut avec les deux : en dernière route sinon
  // la requete se bloquera sur celle là et le serveur n'ira pas sur les autres routes)

  res.send(req.params.article);
});

app.get("/:numOne/:numTwo", (req, res) => {
  res.send(req.params.numOne + " " + req.params.numTwo);
});
