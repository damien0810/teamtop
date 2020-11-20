# Filter

## Context and Objectives

High order functions are the most daily used functions in many programming languages!
Let's discover step by step how `Array.filter` works.

You will have to implement it yourself to have a deep understanding of how it works.

## Specs

You will have to write a few functions taking two parameters to **filter even or odd numbers from an array of integer**.

### 1. Filtering with strings

In the file `04_filter/src/01_filter_with_string.js`, write a function called `filter` which takes two parameters:

- An **array of integers**;
- A string being either `"odd"` or `"even"`.

And returns a **new array** with only the filtered integers left.
⚠️ Using `Array.filter` is forbidden.

E.g.

```javascript
filter([1, 2, 3, 4, 5], "even"); // [2, 4];
filter([1, 2, 3, 4, 5], "odd"); // [1, 3, 5];
```

### 2. Filtering with functions

In the file `04_filter/src/02_filter_with_function.js`, write a function called `filter`, which takes two inputs:

- An **array of integers**;
- A function that takes an **integer** as a _parameter_ and _returns_ a **boolean** if the integer is either odd or even.

And returns a **new array** with only the integers that returned true when given as an argument to the function.
⚠️ Using `Array.filter` is forbidden.

E.g.

```javascript
filter([1, 2, 3, 4, 5], pickEvenNumbers); // [2, 4];
```

### 3. Filtering using an inner function

In the file `04_filter/src/03_filter.js`, write a function called `filter`, which takes two inputs:

- An **array of integers**;
- A function that takes an **integer** as a _parameter_ and _returns_ a **boolean** if the integer is either odd or even.

And returns a **new array** with only the integers that returned true when given as an argument to the function.

✅ Using `Array.filter` is mandatory!
Read `filter`'s documentation [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).

E.g.

```javascript
filter([1, 2, 3, 4, 5], pickEvenNumbers); // [2, 4];
```
