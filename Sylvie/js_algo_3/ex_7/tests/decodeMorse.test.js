const decodeMorse = require("../src/decodeMorse.js");

describe("#decodeMorse", () => {
  it("Should take one parameter", () => {
    expect(decodeMorse.length).toBe(1);
  });

  it("Should return a string", () => {
    expect(typeof decodeMorse(".... . -.--   .--- ..- -.. .")).toBe("string");
    expect(typeof decodeMorse("... --- ...")).toBe("string");
  });

  it("Should return the right translation", () => {
    expect(decodeMorse(".... . -.--   .--- ..- -.. .")).toBe("HEY JUDE");
    expect(decodeMorse("... --- ...")).toBe("SOS");
  });
});
