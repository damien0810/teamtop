const somme = require("./somme")

function double_somme(listOne,listTwo){
    return somme(listOne)+ somme(listTwo);
}
console.log(double_somme([3,6,8,9],[2,8,6,1,7]));















module.exports= double_somme;