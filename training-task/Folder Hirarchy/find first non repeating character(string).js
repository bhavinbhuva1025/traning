

function firstNonRepeatingCharacter(str) {
  const charCount = {};
    for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
    }
    return null; 
}
const inputString = "saas innova pvt.ltd";
const result = firstNonRepeatingCharacter(inputString);
if (result) {
    console.log(`The first non-repeating character is: '${result}'`);
}        
else {
    console.log("All characters are repeating.");
}


