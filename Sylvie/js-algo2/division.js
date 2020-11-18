function division(a, b) {
  if (b === 0) {
    console.log("veuillez choisir un chiffre autre que zéro");
  } else {
    return a / b;
  }
}
//division(4, 0);
//console.log(division(4, 0));

module.exports = division;
