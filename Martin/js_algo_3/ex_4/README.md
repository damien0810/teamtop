# Fizz buzz with map

## Context and objectives

Previously, we implemented `fizzBuzz`. One of the constraints of the
exercise was **to not modify** the input array, which is exactly one of the specificities of the `map` function!

## Specs

Implement the fizzBuzz game using `array.map` inside a `fizzBuzz` function!

As a reminder, the function `fizzBuzz` takes an **array of integers** as a _parameter_ and _returns_ a **new array** where some values will have been modified:

- if the number is divisible by 3 and 5: `FizzBuzz`;
- if the number is divisible by 3: `Fizz`;
- if the number is divisible by 5: `Buzz`;
- otherwise, the value is preserved.
