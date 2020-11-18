const sum = require("./somme.js");

function all_somme(allArrays) {
  let result = 0;
  for (i = 0; i < allArrays.length; i++) {
    // console.log(`${i}:` + allArrays[i]);
    result = result + sum(allArrays[i]);
    // console.log(result);
  }
  return result;
}

let allArrays = [
  [1, 2, 3],
  [0, 1, 2],
  [1, 2, 4],
];
all_somme(allArrays);
console.log(all_somme(allArrays));
