function double(int) {
  return int * 2;
}
function map(array, functionVariable) {
  const returnedArray = [];

  for (let index = 0; index < array.length; index++) {
    returnedArray.push(functionVariable(array[index]));
  }
  return returnedArray;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = { double: double, map: map };
