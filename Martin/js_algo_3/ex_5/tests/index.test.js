const joinArray = require("../src/index");

describe("#joinArray", () => {
  describe("Basic functionalities:", () => {
    it("Should return the right values", () => {
      expect(joinArray(["zero", "one", "two"], " - ")).toEqual(
        "zero - one - two"
      );

      expect(joinArray(["a", "b", "c", "d"], "|")).toEqual("a|b|c|d");
    });
  });

  describe("Requirements:", () => {
    it("Uses reduce to implement the algorithm", () => {
      let reduceCalled = false;

      const originalReduce = Array.prototype.reduce;
      const reduceWrapper = function () {
        reduceCalled = true;
        return originalReduce.apply(this, arguments);
      };

      Array.prototype.reduce = reduceWrapper;

      joinArray(["zero", "one", "two"], " - ");

      expect(reduceCalled).toBe(true);
    });

    it("Doesn't use join function to implement the algorithm", () => {
      let joinCalled = false;

      const originalJoin = Array.prototype.join;
      const joinWrapper = function () {
        joinCalled = true;
        return originalJoin.apply(this, arguments);
      };

      Array.prototype.join = joinWrapper;

      const result = joinArray(["zero", "one", "two"], " - ");

      expect(result).not.toBe(undefined);
      expect(joinCalled).toBe(false);
    });
  });
});
