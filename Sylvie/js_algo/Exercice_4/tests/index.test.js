const fizzBuzz = require("../src/index.js");

function range(rangeValue) {
  return Array(rangeValue)
    .fill()
    .map((x, i) => i + 1);
}

function myFizzBuzz(list) {
  return list.map((integer) => {
    if (integer % 3 === 0 && integer % 5 === 0) return "FizzBuzz";
    if (integer % 3 === 0) return "Fizz";
    if (integer % 5 === 0) return "Buzz";
    return integer;
  });
}

describe("Basic functionalities: ", () => {
  test("The array '[1]' should be preserved", () => {
    const result = fizzBuzz([1]);
    expect(result).toEqual([1]);
  });

  test("The array '[2]' should be preserved", () => {
    const result = fizzBuzz([2]);
    expect(result).toEqual([2]);
  });

  test("The array '[3]' should return: ['Fizz']", () => {
    const result = fizzBuzz([3]);
    expect(result).toEqual(["Fizz"]);
  });

  test("The array '[5]' should return: ['Buzz']", () => {
    const result = fizzBuzz([5]);
    expect(result).toEqual(["Buzz"]);
  });

  test("The array '[15]' should return: ['FizzBuzz']", () => {
    const result = fizzBuzz([15]);
    expect(result).toEqual(["FizzBuzz"]);
  });
});

describe("A set of tests using randomly generated numeric arrays:", () => {
  const randTest = 15;

  for (let i = 1; i <= randTest; i++) {
    const f = Math.floor(Math.round(Math.random(1, 1000) * 1000));
    const myResult = myFizzBuzz([f]);
    test(`Random test n°${i}/${randTest} for number : The array '[${f}]', should be [${myResult}]`, () => {
      const result = fizzBuzz([f]);
      expect(result).toEqual(myResult);
    });
  }
});

test("The function does work on a range from 1 to 15", () => {
  const result = fizzBuzz(range(15));
  expect(result).toEqual(myFizzBuzz(range(15)));
});

test("The input array isn't modified", () => {
  const base = range(20);
  const slice = base.slice(0);
  const result = fizzBuzz(base);

  expect(base).toEqual(slice);
  expect(result).not.toBe(undefined);
});
