function filter(array, str) {
  const returnedArray = [];

  if (str !== "even" && str !== "odd") {
    return array;
  }

  for (let index = 0; index < array.length; index++) {
    if (str === "even") {
      if (array[index] % 2 === 0) {
        returnedArray.push(array[index]);
      }
    } else if (str === "odd") {
      if (array[index] % 2 === 1 || array[index] % 2 === -1) {
        returnedArray.push(array[index]);
      }
    }
  }
  return returnedArray;
}
// do not remove this line, it is for tests
module.exports = filter;
