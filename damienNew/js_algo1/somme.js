function somme(listNum) {
  //console.log("debut :", listNum);
  let result = 0;
  for (let i = 0; i < listNum.length; i++) {
    //console.log(i);
    result = result + listNum[i];
  }
  return result;
}

//console.log(somme([2, 3, 4, 5]));

module.exports = somme;
