function filter(array, str) {
  // Your code here

  if (str === "even") {
    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 0) {
        console.log("cl1 : " + array[i]);
      }
    }
  } else if (str === "odd") {
    for (let i = 0; i < array.length; i++) {
      if (i % 2 == 1) {
        console.log("cl2 : " + array[i]);
      }
    }
  }
}

console.log(filter([1, 2, 3, 4, 5], "even"));
console.log(filter([1, 2, 3, 4, 5], "odd"));

// do not remove this line, it is for tests
module.exports = filter;
