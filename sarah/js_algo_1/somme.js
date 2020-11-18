function somme(listNum) {
  let result = 0;
  //console.log("tab :", newArray);
  for (let i = 0; i < listNum.length; i++) {
    result = result + listNum[i];
  }

  return result;
}
//console.log(somme([6,7,3,4]));
module.exports = somme;
