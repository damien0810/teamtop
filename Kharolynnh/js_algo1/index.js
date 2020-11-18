const addition = require("./addition.js")
const division = require("./division.js")
const multiplication = require("./multiplication.js")
const soustraction = require("./soustraction.js")
const modulo = require("./modulo.js")

// console.log(modulo(4,2));
// console.log(addition(4,4));
// console.log(division(4,4));
// console.log(multiplication(4,4));
// console.log(soustraction(4,2));
 
function menu (a,b,operation) {
    console.log (operation(a,b));
}
menu(4,4,addition);
menu(4,4,soustraction);
menu(4,4,multiplication);
menu(4,4,division);
menu(4,4,modulo);



