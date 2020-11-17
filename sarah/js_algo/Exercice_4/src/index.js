function fizzBuzz(list) {
  //console.log(list);
  const newArray = [];
  
  for (let i = 0; i < list.length; i++) {
    if (list[i] % 3 === 0 && list[i] % 5 === 0) {
      newArray.push("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      newArray.push("Fizz");
    } else if (list[i] % 5 === 0) {
      newArray.push("Buzz");
    }else{
      newArray.push(list[i]);
    }
  }
  return newArray;
}

let result = fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
console.log(result);
// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
