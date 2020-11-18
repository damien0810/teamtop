function double_somme(listNum1, listNum2) {
    let tabList1 = 0
    let tabList2 = 0
    const value = listNum1 + listNum2
    console.log(value)

    for (let i = 0; i < listNum1.length; i++) {
        console.log("boucle1:", tabList1)
        tabList1 = listNum1[i] + tabList1
        console.log("voici la valeur du premier tab:", tabList1);
        console.log("valeur list + le num du tableau :", tabList1);
    }
    for (let i = 0; i < listNum2.length; i++) {
        console.log("boucle2:", tabList2)
        tabList2 = listNum2[i] + tabList2
        console.log("voici tablist2:", tabList2);
        console.log("valeur:", tabList2);
        const result = tabList1 + tabList2
        console.log("resultat de tabList1:", tabList1, "et tabList2:", tabList2, "et le resultat =", result)
    }
    return tabList2;
    return tabList1;
    return result;



    // const somme = require("./somme")
    // unction double_somme(listNumOne, listNumTwo) {
    //     return somme(listNumOne) + somme(listNumTwo)
}


console.log(double_somme);
double_somme([1, 2, 13], [12, 34, 97, 129])

