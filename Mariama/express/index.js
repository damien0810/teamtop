const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(3000)

app.get('/home', function (req, res) {
    res.send('Bienvenue dans mon univers')
})
app.get('/', function (req, res) {
    console.log("query:", req.query)
    console.log("params:", req.params.pokemon)
    res.send(req.params.pokemon)

})
app.get('/:pokemon/:dracafeu', function (req, res) {
    console.log("query:", req.query)
    console.log("params:", req.params.pokemon)
    console.log("params:", req.params.dracafeu)
    res.send(`${req.params.pokemon} et ${req.params.dracafeu}`)
})
