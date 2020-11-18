const somme = require("./somme")

function double_somme(listNumOne, listNumTwo){
  return somme(listNumOne) + somme(listNumTwo)
}

module.exports = double_somme
