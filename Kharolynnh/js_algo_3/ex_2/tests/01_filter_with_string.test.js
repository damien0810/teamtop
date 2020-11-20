const filter = require("../src/01_filter_with_string");

function isEven(n) {
  return n % 2 === 0;
}
function isOdd(n) {
  return n % 2 !== 0;
}

describe("Handling exceptions:", () => {
  test("Should handle empty arrays", () => {
    expect(filter([], "odd")).toEqual([]);
  });

  test("Should handle weird strings", () => {
    expect(filter([1, 2, 3], "iDoNotHandleSuchAWeirdCase")).toEqual([1, 2, 3]);
  });
});

describe("Filters even numbers properly :", () => {
  test("Handles a list of first 5 integers", () => {
    expect(filter([1, 2, 3, 4, 5], "even")).toEqual([2, 4]);
  });

  test("Handles a list of first 5 negative integers", () => {
    expect(filter([-1, -2, -3, -4, -5], "even")).toEqual([-2, -4]);
  });

  test("Works if there are no even integers", () => {
    expect(filter([-1, -3, -5], "even")).toEqual([]);
  });

  test("Works if there are no odd integers", () => {
    expect(filter([-2, -4, -6], "even")).toEqual([-2, -4, -6]);
  });
});

describe("Filters odd numbers properly :", () => {
  test("Handles a list of first 5 integers", () => {
    expect(filter([1, 2, 3, 4, 5], "odd")).toEqual([1, 3, 5]);
  });

  test("Handles a list of first 5 negative integers", () => {
    expect(filter([-1, -2, -3, -4, -5], "odd")).toEqual([-1, -3, -5]);
  });

  test("Works if there are no odd integers", () => {
    expect(filter([-2, -4], "odd")).toEqual([]);
  });

  test("Works if there are no even integers", () => {
    expect(filter([-1, -3, -5], "odd")).toEqual([-1, -3, -5]);
  });
});

test("Should not use existing filter function", () => {
  let filterCalled = false;

  const originalFilter = Array.prototype.filter;
  const filterWrapper = function () {
    filterCalled = true;
    return originalFilter.apply(this, arguments);
  };

  Array.prototype.filter = filterWrapper;

  const result = filter([1, 2, 3, 4, 5], "even");

  expect(result).not.toBe(undefined);
  expect(filterCalled).toBe(false);
});
