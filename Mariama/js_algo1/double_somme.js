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
        const result = listNum1[i] + listNum2[i]

    }
    return tabList2;
    return tabList1;


}

console.log(double_somme);
double_somme([1, 2, 13], [12, 34, 97, 129])

