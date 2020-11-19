function range(numOne, numTwo) {
   let tab =[]
   if (numOne === numTwo){
     return [numOne];
   }
   if(numOne < numTwo){
     for (let i = numOne; i <= numTwo; i++){
       tab.push(i);
     }
     return tab;
   }
   if(numOne < numTwo){
    for (let i = numOne; i >= numTwo; i--){
      tab.push(i);
    }
    return tab;

  // Code the function here.
}}

// Do not remove last lines, it is for tests
module.exports = range;
