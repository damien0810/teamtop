# Range Function

## Context and objectives

On previous exercises, we encountered a common pattern: we often want to generate an array that will contain all the integers included between two integers.

We call this a range!

## Specs

Write a function `range` that takes **two integers** as _input parameters_, and _returns_ a **new array** with defaults values between the starting integer and the ending integer (both included).

This function should work in both ascending or descending order.

E.g.

```javascript
const ascArray = range(1, 4);
// => [1, 2, 3, 4]

const descArray = range(4, 1);
// => [4, 3, 2, 1]
```
