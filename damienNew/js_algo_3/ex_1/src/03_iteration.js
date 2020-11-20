// ## Iteration on arrays
//
// -  Create an array called `literalDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each values of the table.

let litteralDigits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

for (let index = 0; index < litteralDigits.length; index++) {
  console.log(litteralDigits[index]);
}
