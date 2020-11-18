function sum(listInt) {
  let somme = 0;
  //console.log(listInt);
  for (i = 0; i < listInt.length; i++) {
    // console.log(i);
    somme = somme + listInt[i];
  }
  return somme;
}
array = [1, 4, 6, 8];
sum(array);
console.log(sum(array));

module.exports = sum;
