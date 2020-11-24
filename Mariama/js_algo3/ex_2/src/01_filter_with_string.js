function filter(array, str) {
  if (str === "odd") {
    console.log("hello");
  }
  else if (str === "even") {
    console.log("good");
  }
  else {
    console.log("fine");
  }
}
filter([1, 2, 3, 4, 5], "odd"); // [1, 3, 5];
module.exports = filter;
