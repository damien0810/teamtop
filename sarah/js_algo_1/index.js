const addition = require("./addition");
const substraction = require("./substraction");
const multiplication = require("./multiplication");
const division = require("./division");
const modulo = require("./modulo");

const somme = require ("./somme");
const doublesomme = require ("./doublesomme");

// const resultAdd = sum(365,456);
// console.log(resultAdd);

// const resultSub = substraction(6879,678);
// console.log(resultSub);

// const resultMult = multiplication(55800,87870);
// console.log(resultMult);

// const resultDiv = division(5658903230,68);
// console.log(resultDiv);

// const resultMod = modulo(8978,778);
// console.log(resultMod);

function menu(numOne, numTwo, operation) {
  const result = operation(numOne, numTwo);
  console.log(result);
  return result;
}

menu(10, 2, division);
menu(77, 69, addition);
menu(56, 2, substraction);
menu(676, 7, multiplication);
menu(767, 78, modulo);
