/* global beforeAll test expect */
const fs = require("fs");
const path = require("path");
const readcode = require("./readcode");

let studentCode;
beforeAll(() => {
  // Loads the student's code
  studentCode = readcode(path.resolve(__dirname, "../src/01_print_numbers.js"));
  return studentCode;
});

test("print numbers from 0 to 100", () => {
  return studentCode.then((code) => {
    let numbers = [];
    let _consolelog = console.log;
    console.log = (thing) => numbers.push(thing);

    eval(code);

    console.log = _consolelog;

    expect(numbers.length).toBe(101);
    expect(numbers[10]).toBe(10);
    expect(numbers[55]).toBe(55);
  });
});

test("one for was used", () => {
  return studentCode.then((code) => {
    const fors = code.match(/for(\s*?)\(.*?;.*?;.*?\)/gm);

    expect(fors).toBeTruthy();
    expect(fors.length).toBe(1);
  });
});
