const taille = require("./taille");

//console.log(taille(data));
function animalCount(dataList) {
  // Must return the number of animals in the list.
  let result = 0;
  for (let i = 0; i < dataList.length; i++) {
    console.log(taille(dataList[i]));
    result = result + taille(dataList[i]);
  }
  return result;
}

const data = [
  ["Arthus", "Mathis", "Juliette"],
  ["Bob", "Prince"],
  [],
  ["Nesta"],
  ["Gandhi"],
  [],
  ["Neige"],
];

console.log(animalCount(data));
/* 
Par exemple: 

let result = animalCount(dataList)
console.log(result) // => 8

*/
