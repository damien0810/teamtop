/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../src/05_descending.js"));
  return studentCode;
});

test("print numbers from zero to nine", () => {
  return studentCode.then((code) => {
    const numbers = [];
    let _consolelog = console.log;
    console.log = (thing) => numbers.push(thing);

    eval(code);

    console.log = _consolelog;
    const expected = [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].reverse();

    expect(numbers).toEqual(expected);
  });
});

test("one for was used", () => {
  return studentCode.then((code) => {
    const fors = code.match(/for(\s*?)\(.*?;.*?;.*?\)/gm);

    expect(fors).toBeTruthy();
    expect(fors.length).toBe(1);
  });
});
