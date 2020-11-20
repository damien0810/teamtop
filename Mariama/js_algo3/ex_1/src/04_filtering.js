// ## Iteration on arrays with filter
//
// -  Create an array called `literalDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each odd values of the table.


let literalDigits = (["zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
]);
let stdout = [];
for (let i = 0; i < 10; i++) {
  if (literalDigits % 2 === 0) {
    return 0;
  }
  else {
    return literalDigits;
  }

}
console.log(literalDigits);


// const numResult = literalDigits.filter(literalDigit => literalDigit.length);
// console.log(numResult);