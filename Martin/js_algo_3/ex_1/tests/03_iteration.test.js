/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../src/03_iteration.js"));
  return studentCode;
});

test("print numbers from zero to nine", () => {
  return studentCode.then((code) => {
    let numbers = [];
    let _consolelog = console.log;
    console.log = (thing) => numbers.push(thing);

    eval(code);

    console.log = _consolelog;

    expect(numbers).toEqual([
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
    ]);
  });
});

test("one for was used", () => {
  return studentCode.then((code) => {
    const fors = code.match(/for(\s*?)\(.*?;.*?;.*?\)/gm);

    expect(fors).toBeTruthy();
    expect(fors.length).toBe(1);
  });
});
