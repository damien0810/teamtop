const multiplication = require("./multiplication");
const division = require("./division");
const addition = require("./addition");
const soustraction = require("./soustraction");

//const resultMultiplication = multiplication(2, 8);
//console.log(resultMultiplication);

//const resultDivision = division(2, 8);
//console.log(resultDivision);

//const resultAddition = addition(2, 2222);
//console.log(resultAddition);

//const resultSoustraction = soustraction(2, 8);
//console.log(resultSoustraction);

function menu(a, b, operation) {
  console.log(operation(a, b));
  return operation(a, b);
}
menu(2, 8, addition);
menu(32, 12, division);
menu(32, 3, soustraction);
menu(24, 4, multiplication);
