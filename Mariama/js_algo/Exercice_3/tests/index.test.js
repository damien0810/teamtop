const range = require("../src/index");

describe("#range", () => {
  it("Should sort by ascending order", () => {
    expect(range(1, 4)).toEqual([1, 2, 3, 4]);
  });

  it("Should sort by descending order", () => {
    expect(range(4, 1)).toEqual([4, 3, 2, 1]);
  });

  it("Should return a unique value when arguments' values are equal", () => {
    expect(range(2, 2)).toEqual([2]);
  });
});
