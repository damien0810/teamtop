function translate(integer) {
  if (integer % 3 === 0 && integer % 5 === 0) return "FizzBuzz";
  if (integer % 3 === 0) return "Fizz";
  if (integer % 5 === 0) return "Buzz";
  return integer;
}

function fizzBuzz(list) {
  return list.map(translate);
}

module.exports = fizzBuzz;
