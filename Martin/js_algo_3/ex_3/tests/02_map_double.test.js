const mapDouble = require("../src/02_map_double");

describe("#double", () => {
  it("Should return the double of a single integer", () => {
    expect(mapDouble.double(24)).toBe(48);
  });
});

describe("#mapDouble", () => {
  it("Should apply the function on every cell of the array", () => {
    expect(mapDouble.map([1, 2, 3], (x) => x * x)).toEqual([1, 4, 9]);
    expect(mapDouble.map([1, 2, 3], (x) => -x)).toEqual([-1, -2, -3]);
  });

  it("Should work when given the function 'double' with map ", () => {
    const arr = mapDouble.map([1, 2, 3], mapDouble.double);
    expect(arr).toEqual([2, 4, 6]);
  });

  it("Shouldn't modify the input array", () => {
    const base = [1, 2, 3, 4];
    const slice = base.slice(0);
    const result = mapDouble.map(base, mapDouble.double);

    expect(base).toEqual(slice);
    expect(result).not.toBe(undefined);
  });
});
