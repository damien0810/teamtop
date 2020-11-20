function double(number) {
  // Code your function here.
  console.log(number * 2);
}

function map(array, fn) {
  // Code your function here.
  for (let i = 0; i < array.length; i++) {
    double(array[i]);
  }
}

// Do not remove last lines, it is for tests
double(4);
tab = [1, 2, 3, 4];
map(tab, double);
//console.log((tab, double));
//console.log(double(4));
//const doubleArray = map([1, 3, 1, 4], double);
// => [2, 6, 2, 8]
module.exports = { double: double, map: map };
