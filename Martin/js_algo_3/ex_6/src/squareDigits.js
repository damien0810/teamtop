function squareDigits(number) {
  if (Number.isInteger(number)) {
    return parseInt(
      number
        .toString()
        .split("")
        .map((n) => String(parseInt(n) * parseInt(n)))
        .join(""),
    );
  } else {
    throw new Error("Not a number");
  }
}

module.exports = squareDigits;
