const addition = require("./addition")
const substraction = require("./substraction")
const multiplication = require("./multiplication")
const division = require("./division")
const double_somme = require("./double_somme")


// console.log(double_somme([1, 2, 3], [12, 34, 56]))


function menu(a, b, operation){
  console.log(operation(a, b));
}

menu([1, 2, 3], [4, 12, 34], double_sum)
