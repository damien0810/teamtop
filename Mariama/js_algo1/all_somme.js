const somme = require("./somme")
function all_somme(allArrays) {
    let result = 0
    for (let i = 0; i < allArrays.length; i++) {
        result = result + somme(allArrays[i])
        console.log(result)
    }
    return result;
}
let allArrays = [[1, 2, 3], [12, 34, 12], [222, 1, 3, 12, 35], [1, 2, 13]]
all_somme(allArrays)

console.log(result)
module.exports = all_somme
