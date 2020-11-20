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

for (let index = literalDigits.length - 1; index >= 0; index--) {
  console.log(literalDigits[index]);
}
