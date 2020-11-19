const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

const decodeMorse = (morseCode) => {
  if (typeof morseCode !== "string") {
    throw new Error("This is not a string.");
  }
  return morseCode
    .split(" ")
    .reduce(
      (accumulator, character) => (MORSE_CODE[character] ? accumulator + MORSE_CODE[character] : accumulator + " "),
      "",
    )
    .replace(/\s+/g, " ")
    .trim();
};

// Leave line below for tests to work properly
module.exports = decodeMorse;
