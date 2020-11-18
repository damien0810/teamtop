function modulo (a,b) {
    if (b===0){
        console.log("ceci est interdit")
    }else{   
        return a % b
    }
};

// console.log(modulo(12, 0))
module.exports = modulo