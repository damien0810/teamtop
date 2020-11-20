// ## Decreasing Iteration on arrays
//
// -  Using `length`, write on `stdout` each values of the `literalDigits` array, descending.

const literalDigits = [
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
const reverse = literalDigits.reverse();
for (let i = 0; i < literalDigits.length; i = i + 1) {
  console.log(literalDigits[i]);
}