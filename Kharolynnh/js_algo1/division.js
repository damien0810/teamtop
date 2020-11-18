function division (a,b) {
   if (b===0){
       console.log("Pardonnez-moi ce calcul est impossible veuillez recommencer");
        return 0;
    }else {   
    return a / b
    }
} 


// console.log(division(2, 0))
module.exports = division