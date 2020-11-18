function somme(listInt){
    let result = 0;
    // return Array(listInt);

    for (let i = 0; i< listInt.length; i++){ 
    // result.push(listInt);
    // console.log(result);
        result= result + listInt[i]
    // console.log [i]
    }
    return result;
};

const result=somme ([1,2,3,4,5,6,7,8,9,10])
console.log(result);
module.exports = somme