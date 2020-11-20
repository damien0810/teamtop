const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/home', function (req, res) {
    res.send('Au boulot les gars')
  })
  app.get('/dog', function (req, res) {
    res.send('#TEAM-MALINOIS')
  })

  app.get('/:malinois', function (req, res) {
    //   console.log("query", req.query);
    //   console.log ("params", req.params.malinois)
      res.send(req.params.malinois)
  })
  app.get('/:papillon/:chien', function (req, res) {
    res.send(`${req.params.papillon} et ${req.params.chien}`)
  })
  
app.listen(3000)
