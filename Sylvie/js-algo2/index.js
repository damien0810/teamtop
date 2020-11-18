const addition = require("./addition.js");
const modulo = require("./modulo.js");
const division = require("./division.js");
const multiplication = require("./multiplication.js");
const soustraction = require("./soustraction.js");

function menu(a, b, fonction) {
  const result = fonction(a, b);
  console.log("le résultat de l'opération est : " + result);
  return result;
}

menu(4, 2, addition);
menu(3, 2, division);
menu(4, 2, modulo);
menu(5, 1, soustraction);
menu(7, 3, multiplication);

/*
const resultAdd = sum(4, 2);
console.log(sum(4, 2));

const resultMod = modulo(8, 4);
console.log(modulo(8, 4));

const resultDiv = division(6, 2);
console.log(division(6, 2));

const resultMult = multiplication(9, 2);
console.log(multiplication(9, 2));

const resultSoustr = soustraction(5, 1);
console.log(soustraction(5, 1));
*/
