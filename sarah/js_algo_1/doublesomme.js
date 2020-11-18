// function double_somme(listNumOne, listNumTwo) {
//   let result = 0;
//   //console.log("tab :", newArray);
//   for (let i = 0; i < listNumOne.length; i++) {
//     result = result + listNumOne[i];
//     //console.log(i);
//   }
//   for (let i = 0; i < listNumTwo.length; i++) {
//     result = result + listNumTwo[i];
//   }

//   return result;
// }

// console.log(double_somme([3, 6, 8, 5, 9], [2, 8, 6, 1, 7]));

const somme = require("./somme");
function double_somme(listNumOne, listNumTwo) {
  return somme(listNumOne) + somme(listNumTwo);
}
//console.log(double_somme([3, 6, 8, 5, 9], [2, 8, 6, 1, 7]));
module.exports = double_somme;
