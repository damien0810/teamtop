function double(array) {
  // Code your function here.
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * 2);
  }
}

// Do not remove last lines, it is for tests
module.exports = double;

//const doubleArray = double([1, 2, 3, 4]);
// => [2, 4, 6, 8]
double((tab = [1, 2, 3, 4]));
//console.log(double(tab));
