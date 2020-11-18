function modulo(a, b) {
  if (b === 0) {
    console.log("impossible");
  } else {
    return a % b;
  }
}
//modulo(8, 0);
//console.log(modulo(8, O));

module.exports = modulo;
