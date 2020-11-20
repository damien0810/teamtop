/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(
    path.resolve(__dirname, "../src/07_digits_again_with_while.js")
  );
  return studentCode;
});

test("digits exists", () => {
  return studentCode.then((code) => {
    const digits = eval(code + "; digits;");

    expect(digits).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});

test("one while was used", () => {
  return studentCode.then((code) => {
    const whiles = code.match(/while(\s*?)\(.*?\)/gm);

    expect(whiles).toBeTruthy();
    expect(whiles.length).toBe(1);
  });
});

test("one push was used", () => {
  return studentCode.then((code) => {
    const push = code.match(/digits(\s*?)\.push/gm);

    expect(push).toBeTruthy();
    expect(push.length).toBe(1);
  });
});
