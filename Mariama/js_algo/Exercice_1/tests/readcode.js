/*
  This file is for teachers to help with the tests.
 */

const fs = require("fs");

module.exports = function (path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, "utf8", function (err, text) {
      if (err) {
        reject(err);
        return;
      }
      const studentCode = text
        .replace(/\/\*([^]*?)\*\//gm, "") // multiline comments
        .replace(/\/\/[^]*?\n/g, "") // single line comments
        .trim();

      if (studentCode.length) {
        resolve(studentCode);
      } else {
        reject("File does not contain any code");
      }
    });
  });
};
