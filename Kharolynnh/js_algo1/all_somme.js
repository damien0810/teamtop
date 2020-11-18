const somme = require("./somme");

function all_somme(allArrays){
   let result = 0 
    for(let i = 0;i<allArrays.length;i++){
        // console.log(`element ${i}:`,allArrays[i])
        result = result + somme(allArrays[i]);
    }
    return result;

}

let allArrays = [[1,2,3],[12,34,12],[222,1,3,12,35],[0]];
console.log(all_somme(allArrays));

module.exports= all_somme
