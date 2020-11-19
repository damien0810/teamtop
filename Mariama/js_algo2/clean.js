function cleanAll(tableau) {
    if (tableau.length === 1 && tableau[0] === "") {
        return [];
    } else {
        return tableau;
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
console.log(data.map(cleanAll))

