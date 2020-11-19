function somme(listNum) {
  let result = 0
  for (let i = 0; i < listNum.length; i++) {
    result = result + listNum[i]
  }
  return result;
}

let resultSomme = somme( [1,2,5,4] ) // 12

module.exports = somme
