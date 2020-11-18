function sum(listInt) {
  let result = 0;
  //console.log(listInt);
  for (i = 0; i < listInt.length; i++) {
    // console.log(i);
    result = result + listInt[i];
  }
  return result;
}
array = [1, 4, 6, 8];
sum(array);
//console.log(sum(array));

module.exports = sum;
