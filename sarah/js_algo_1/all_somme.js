const somme = require("./somme");
function all_somme(allArrays) {
  let result = 0;
  for (let i = 0; i < allArrays.length; i++) {
    //console.log(`element ${i}:`,allArrays[i])
    result = result + somme(allArrays[i]);
  }
  return result;
}

let allArrays = [
  [1, 2, 6],
  [2, 8, 3],
  [4, 7, 8],
];
console.log(all_somme(allArrays));
//somme();
