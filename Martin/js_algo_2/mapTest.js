

let prenoms = [["martin"], [""], ["Arthus"],[ "Charles"], [""]]

function clean(word){
  console.log(`condition (${word} et ""):`, word === "");
  if(word === [""]){
    console.log("plop");
    return null;
  } else {
    return word;
  }
}



let result = prenoms.map(clean);
//clean("martin")
//clean([""])
//clean("Arthus")
//clean("Charles")
//clean("")
console.log(result) // 
// [double(9), double(12), double(8), double(10), double(7)]
// [18, 24, 16, 20, 14]

