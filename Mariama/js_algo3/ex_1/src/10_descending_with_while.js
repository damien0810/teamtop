// ## Decreasing Iteration on arrays using while
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = [
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
let stdout = [];
let i = 0;
const reverse = litteralDigits.reverse();
while (i < litteralDigits.length) {
  console.log(litteralDigits[i]);
  i = i + 1;
}