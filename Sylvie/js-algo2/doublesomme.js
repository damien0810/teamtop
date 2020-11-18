function double_somme(listOne, listTwo) {
  let result = 0;
  for (i = 0; i < listOne.length; i++) {
    console.log("l4 : " + i);
    result = result + listOne[i];
    console.log("l6 :" + result);
  }
  for (i = 0; i < listTwo.length; i++) {
    console.log("l8 : " + i);
    result = result + listTwo[i];
  }
  return result;
}

double_somme([2, 5, 12], [6, 4, 3]);

console.log("l15 :" + double_somme([2, 5, 12], [6, 4, 3]));
