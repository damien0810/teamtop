function clean(element){

    if (element[0] === "" && element.length ===1  ) {
       return[]; 
    } else{
        return element;
    }

}
// function cleanAll(tableau){  
// }

let data =[["Arthus", "Mathis", "Juliette"],["Bob", "Prince"],[""], ["Nesta"], ["Gandhi"], [""], ["Neige"]];

console.log(data.map(clean));

module.exports = clean