const fizzBuzz = require("../src/index");

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

describe("#fizzBuzz", () => {
  it("Has to use array.map !", () => {
    const r = range(10);
    let flag = false;
    r.old_map = r.map;
    r.map = function (f) {
      flag = true;
      return r.old_map(f);
    };
    fizzBuzz(r);
    expect(flag).toEqual(true);
  });

  describe("Basic functionalities: ", () => {
    it("Should return [1] when given: [1]", () => {
      const result = fizzBuzz([1]);
      expect(result).toEqual([1]);
    });

    it("Should return [2] when given: [2]", () => {
      const result = fizzBuzz([2]);
      expect(result).toEqual([2]);
    });

    it("Should return ['Fizz'] when given [3]", () => {
      const result = fizzBuzz([3]);
      expect(result).toEqual(["Fizz"]);
    });

    it("Should return ['Buzz'] when given [5]", () => {
      const result = fizzBuzz([5]);
      expect(result).toEqual(["Buzz"]);
    });

    it("Should return ['FizzBuzz'] when given [15]", () => {
      const result = fizzBuzz([15]);
      expect(result).toEqual(["FizzBuzz"]);
    });
  });

  describe("A set of  tests using randomly generated numeric arrays:", () => {
    const randTest = 15;
    for (let i = 1; i <= randTest; i++) {
      const f = Math.floor(Math.round(Math.random(1, 1000) * 1000));
      const myResult = myFizzBuzz([f]);
      it(`is random tests n°${i}/${randTest} for number : [${f}], should be [${myResult}]`, () => {
        const result = fizzBuzz([f]);
        expect(result).toEqual(myResult);
      });
    }
  });

  describe("Complex functionalities: ", () => {
    it("Should work on a range from 1 to 15", () => {
      const result = fizzBuzz(range(15));
      expect(result).toEqual(myFizzBuzz(range(15)));
    });

    it("Shouldn't modifiy the input array:", () => {
      const base = range(20);
      const slice = base.slice(0);
      const result = fizzBuzz(base);

      expect(result).not.toBe(undefined);
      expect(base).toEqual(slice);
    });
  });
});
