const taille = require("./taille");
const clean = require("./clean");

function animalCount(dataList) {
  let result = 0;
  let cleanedData = dataList.map(clean)

  for (let index = 0; index < cleanedData.length; index++) {
    result = result + taille(cleanedData[index]);
  }

  return result;
}
// email = "azepoaziepoaizepo".split().map()
// if(email)

const data = [
  ["Arthus", "Mathis", "Juliette"],
  ["Bob", "Prince"],
  [""],
  ["Nesta"],
  ["Gandhi"],
  [""],
  ["Neige"],
];
//           [                 0               ,        1         , 2,      3
const tailleData = animalCount(data) // 8
console.log(tailleData)
/*
=======

Par exemple:

let result = animalCount(data)
console.log(result) // => 8

*/
