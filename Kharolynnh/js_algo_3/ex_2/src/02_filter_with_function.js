function filter(array, fn) {
  const returnedArray = [];

  for (let index = 0; index < array.length; index++) {
    if (fn(array[index])) {
      returnedArray.push(array[index]);
    }
  }
  return returnedArray;
}

// do not remove this line, it is for tests
module.exports = filter;
