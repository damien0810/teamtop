const taille = require("./taille");

function animalCount(dataList) {
  // Must return the number of animals in the list.
  let result = 0;
  for (let i = 0; i < dataList.length; i++) {
    //console.log(dataList.length);
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
const tailleData = animalCount(data);
console.log(tailleData);

const result = data.map(clean);
console.log(result);
/* 
Par exemple: 

let result = animalCount(dataList)
console.log(result) // => 8

*/
