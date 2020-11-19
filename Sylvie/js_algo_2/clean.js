function clean(element) {
  console.log("l2" + element);
  if (element.length === 1 && element[0] === "") {
    // recherche les tableaux d'une taille de 1
    // puis rechercher le 1er élément du tableau
    // qui est un string vide
    return [];
  } else {
    console.log("l6" + element);
    return element;
  }
}
function cleanAll(tableau) {
  return tableau.map(clean);
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
console.log(cleanAll(data)); // =>
/*[
  ["Arthus", "Mathis", "Juliette"],
  ["Bob", "Prince"],
  [],
  ["Nesta"],
  ["Gandhi"],
  [],
  ["Neige"],
];
*/
