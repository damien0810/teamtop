function clean(element){
  if(element[0] === "" && element.length === 1){
    return []
  } else {
    return element
  }
}

const data = [
  ["Arthus", "Mathis", "Juliette"],
  ["Bob", "Prince"],
  [""],
  ["Nesta"],
  ["Gandhi"],
  [""],
  ["Neige"],
];
const result = data.map(clean)

// const resultFiltre = data.
filter((sous_tableau) => {
//   return (sous_tableau[0] === "" && sous_tableau.length === 1);
// })

// [callback(["Arthus", "Mathis", "Juliette"]), ]


 // => 
/*
[
  ["Arthus", "Mathis", "Juliette"],
  ["Bob", "Prince"],
  [],
  ["Nesta"],
  ["Gandhi"],
  [],
  ["Neige"],
];
*/

module.exports = clean
