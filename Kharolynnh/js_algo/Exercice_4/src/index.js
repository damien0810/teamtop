function fizzBuzz(list) {
  const result = [];

  for (let i =0; i< list.length; i ++ ){
    if (list[i]%3 === 0 && list [i]% 5 ===0){
      result.push("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      result.push("Fizz");
    } else if (list[i] % 5 === 0) {
      result.push("Buzz");
    }else {
      result.push(list[i]);
    }
  }
  return result;
}




// Code the function here.


// Leave the line below untouched for tests to work properly.
module.exports = fizzBuzz;
