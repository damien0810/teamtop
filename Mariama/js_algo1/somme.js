function somme(listInt) {
    // console.log("debut:", listInt)
    let tabList = 0
    for (let i = 0; i < listInt.length; i++) {
        tabList = listInt[i] + tabList
        // console.log(tabList);
    }
    return tabList;
}
somme([5, 6, 7, 9])

module.exports = somme
