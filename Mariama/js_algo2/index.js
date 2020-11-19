const taille = require("./taille")

function animalCount(dataList) {

    let result = 0

    for (let i = 0; i < dataList.length; i++)
        result = result + taille(data[i])
    console.log(" nbre d'animaux:", result)
    return result
}

const data = [["Arthus", "Mathis", "Juliette"], ["Bob", "Prince"], [], ["Nesta"], ["Gandhi"], [], ["Neige"]]

animalCount(data)
// console.log(animalCount);
// Must return the number of animals in the list.

/*

Par exemple:

let result = animalCount(dataList)
console.log(result) // => 8

*/
