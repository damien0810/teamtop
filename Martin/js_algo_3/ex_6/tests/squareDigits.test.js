const squareDigits = require("../src/squareDigits");

describe("#squareDigits", () => {
  it("Should take one parameter", () => {
    expect(squareDigits.length).toBe(1);
  });

  it("Should throw an error when called with something else than an integer", () => {
    const errors = [];
    params = ["", [], {}, null, 2.5, /5/];
    params.forEach((element) => {
      try {
        squareDigits(element);
      } catch (e) {
        errors.push(e);
      }
    });

    expect(errors.length).toBe(params.length);
  });

  it("Should return an integer", () => {
    expect(Number.isInteger(squareDigits(1))).toBe(true);
  });

  it("Should return the right number each time", () => {
    const tries = [
      { param: 2, result: 4 },
      { param: 9, result: 81 },
      { param: 9129, result: 811481 },
    ];

    tries.forEach(({ param, result }) => {
      expect(squareDigits(param)).toBe(result);
    });
  });
});
