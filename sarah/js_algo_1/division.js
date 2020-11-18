function division(numOne, numTwo) {
  const result = numOne / numTwo;
  if (numTwo === 0) {
    console.log("indivisible par zéro");
    return null;
  } else {
    return result;
  }
}

//console.log(division(10, 0));

module.exports = division;
