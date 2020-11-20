function joinArray(array, separator) {
  return array.reduce(
    (accumulator, currentValue) => accumulator + separator + currentValue
  );
}

// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = joinArray;
