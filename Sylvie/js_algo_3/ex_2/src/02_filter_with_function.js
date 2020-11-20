function filter(array, fn) {
  // Your code here
  function pickEvenNumbers() {
    if (i % 2 === 0) {
      for (let i = 0; i <= array.length; i++) console.log(array[i]);
    }
  }
}
console.log(filter([1, 2, 3, 4, 5], pickEvenNumbers)); // [2, 4];
// do not remove this line, it is for tests
module.exports = filter;
