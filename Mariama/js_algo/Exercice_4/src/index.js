function fizzBuzz(list) {
  const tabList = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] % 5 === 0 && list[i] % 3 === 0) {
      tabList.push("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      tabList.push("Fizz");
    } else if (list[i] % 5 === 0) {
      tabList.push("Buzz");
    }
    else {
      tabList.push(list[i]);
    }
  }
  return tabList;
}
const result = fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log(result);

module.exports = fizzBuzz;