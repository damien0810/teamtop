const taille = require("./taille.js");

const data = [
  ["Arthus", "Mathis", "Juliette"],
  ["Bob", "Prince"],
  [],
  ["Nesta"],
  ["Gandhi"],
  [],
  ["Neige"],
];

function animalCount(dataList) {
  // Must return the number of animals in the list.
  let result = 0;
  for (i = 0; i < dataList.length; i++) {
    result = result + taille(dataList[i]);
    //console.log(result);
  }
  return result;
}

console.log(animalCount(data));
animalCount(data);
