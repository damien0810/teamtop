function clean(element) {
  if (element[0] === "" && element.length === 1) {
    return [];
  } else {
    return element;
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

console.log(data.map(clean));
