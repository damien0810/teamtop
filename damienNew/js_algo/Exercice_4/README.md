# FizzBuzz

## Context and objectives

Fizz buzz is a group word game for children to teach them about division.
Players take turns to count incrementally, replacing any number divisible by three with the word `fizz`, and any number divisible by five with the word `buzz`.

## Specs

Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array of positive integers, for example: `[1, 2, 3, 4, 5, 6]`.
This function will _return_ a **new array** where some values will have been modified:

- if the number is divisible by 3: `Fizz`;
- if the number is divisible by 5: `Buzz`;
- if the number is divisible by 3 and 5: `FizzBuzz`;
- otherwise, the value is preserved.

E.g.

```js
fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
// => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
```

## Hints

- You can try your function using the previously defined `range()` in the `01_range_function/src/index.js` file to create your array of positive integers;
- The result of the function **must be** a new array.
