function modulo(numOne, numTwo) {
  const result = numOne % numTwo;
  if (numTwo === 0) {
    console.log("On ne peut pas faire le modulo de zéro");
    return null;
  } else {
    return result;
  }
}
//console.log(modulo(12, 0));

module.exports = modulo;
