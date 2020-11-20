function filter(array, str) {
  if (str === "odd") {
    console.log("Bonjour");
    // Do some actions
  } else {
    console.log("Hello");
  }
}
filter([1, 2, 3], "odd"); //"Bonjour"
//filter([1, 2, 3], "even"); //"Hello"
// do not remove this line, it is for tests
module.exports = filter;
