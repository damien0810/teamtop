function double_somme(listNumOne, listNumTwo) {
  //console.log("debut :", listNumOne);
  let result = 0;
  for (let i = 0; i < listNumOne.length; i++) {
    console.log(i);
    result = result + listNumOne[i];
  }
  for (let i = 0; i < listNumTwo.length; i++) {
    console.log(i);
    result = result + listNumTwo[i];
  }
  console.log(result);
  return result;
}

double_somme([1, 2, 3], [12, 34, 56]);
