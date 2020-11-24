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
for (let i = 0; i < literalDigits.length; i++) {
  if (i % 2 === 1) {
    console.log(literalDigits[i]);
  }

}


// const numResult = literalDigits.filter(literalDigit => literalDigit.length);
// console.log(numResult);