function filter(array, str) {
  // Your code here
  //const newArray = [];
  if (str === "odd") {
    console.log("Bonjour");
  } else if (str === "even") {
    console.log("Hello");
  } else {
    console.log("");
  }
}

filter([1, 5, 6, 8, 3], "odd");

// do not remove this line, it is for tests
module.exports = filter;
