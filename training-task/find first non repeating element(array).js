
function firstNonRepeatingElement(arr) {
    const elementCount = {};
    for (let element of arr) {
    elementCount[element] = (elementCount[element] || 0) + 1;
    }
    for (let element of arr) {
    if (elementCount[element] === 1) {
      return element;
    }   
    }
    return null; 
}   

const array =[1,2,3,4,3,2,1,5,4,6,7,6,5,8,7,9];
const result = firstNonRepeatingElement(array);
if (result) {
    console.log(`The first non-repeating element(array) is: =${result}`);
}        
else {
    console.log("All element are repeating.");
}
