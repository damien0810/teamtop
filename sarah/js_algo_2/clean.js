function clean(element) {
  if (element[0] === "" && element.length === 1) {
    //console.log("l3",element);
    return [];
  } else {
    return element;
  }
}
// function cleanAll(data){
// return data.map(clean);
// }

const data = [
  ["Arthus", "Mathis", "Juliette"],
  ["Bob", "Prince"],
  [""],
  ["Nesta"],
  ["Gandhi"],
  [""],
  ["Neige"],
];
// const result = data.map(clean);
// console.log(result);
// let newTablea = []
// for (let index = 0; index < data.length; index++) {
//     const element = data[index];
//     newTablea.push(clean(element))
// }
// clean(element)
