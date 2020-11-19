const taille = require("./taille.js")
const clean = require("./clean.js")
function animalCount(dataList){
    let result = 0
    let cleaneData = dataList.map(clean)
    for(let i = 0; i<cleaneData.length;i++){
        result = result +taille(cleaneData[i]);
    }
   return result
  
}
let data =[["Arthus", "Mathis", "Juliette"],["Bob", "Prince"],[], ["Nesta"], ["Gandhi"], [], ["Neige"]];
// console.log(animalCount(data));
/* 
Par exemple: 

let result = animalCount(dataList)
console.log(result) // => 8

*/ 
