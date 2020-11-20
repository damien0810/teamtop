const double = require("../src/01_double");

describe("#double (without map)", () => {
  test("Works with a list of 4 positive integers", () => {
    expect(double([0, 1, 2, 3])).toEqual([0, 2, 4, 6]);
  });

  test("Works with a list of 4 negative integers", () => {
    expect(double([0, -1, -2, -3])).toEqual([0, -2, -4, -6]);
  });

  test("The input array isn't modified", () => {
    const base = [1, 2, 3, 4];
    const slice = base.slice(0);
    const result = double(base);

    expect(base).toEqual(slice);
    expect(result).not.toBe(undefined);
  });
});
