# Map Double

## Context and objectives

We are `for` loop experts now, right? We know that `for` is a very common pattern, it allows us to loop over an array in order to manipulate each of its values.
So, if it's a common pattern, it can be more reusable when wrapped in a function, right?

## Specs

### 1. Double

In the file `05_map_double/src/01_double.js`, create a function named `double`, which take an **array of integers** as a _parameter_ and _return_ a **new array** with all values doubled.

E.g.

```javascript
const doubleArray = double([1, 2, 3, 4]);
// => [2, 4, 6, 8]
```

### 2. Map Double

Firstly, in the file `05_map_double/src/02_map_double.js`, create a function named `double`, which takes an **integer** as a _parameter_ and _return_ the **double** of this integer.
In a second time, create a function called `map`. This function should take two parameters:

- an **array of integers**;
- a **function** that will be called on each integer of the array. It takes an integer as a parameter and returns an integer.

The function then _returns_ a **new array**.

**To summarize**: the function `map` takes an array and a function, applies the function on all elements of the array, and returns the results in a new array.

To test your `map` function, you can try calling it with an array of your choice and the `double` function.

E.g.

```javascript
const doubleArray = map([1, 3, 1, 4], double);
// => [2, 6, 2, 8]
```
