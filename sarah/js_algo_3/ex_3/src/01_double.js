function double(array) {
  const returnedArray = [];

  for (let index = 0; index < array.length; index++) {
    returnedArray.push(array[index] * 2);
  }
  return returnedArray;
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = double;
