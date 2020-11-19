const filter = require("../src/02_filter_with_function");

const isEven = (n) => n % 2 === 0;
const isOdd = (n) => n % 2 !== 0;

test("should handle empty arrays", () => {
  expect(filter([], isEven)).toEqual([]);
});

test("should filter as expected", () => {
  expect(filter([1, 2, 3, 4, 5], isEven)).toEqual([2, 4]);
  expect(filter([0, -1, -2, -3, -4, -5], isEven)).toEqual([0, -2, -4]);
  expect(filter([1, 2, 3, 4, 5], isOdd)).toEqual([1, 3, 5]);
});

test("should not use existing filter function", () => {
  let filterCalled = false;

  const originalFilter = Array.prototype.filter;
  const filterWrapper = function () {
    filterCalled = true;
    return originalFilter.apply(this, arguments);
  };

  Array.prototype.filter = filterWrapper;

  const result = filter([1, 2, 3, 4, 5], isEven);

  expect(result).not.toBe(undefined);
  expect(filterCalled).toBe(false);
});
