// Count vowels and consonants in a string.:-	use only for loop and basic if condition.
function countVowelsAndConsonants(str) {
    let vowelsCount = 0;
    let consonantsCount = 0;
    const vowels = 'aeiouAEIOU';    
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCount++;
        } else {
            consonantsCount++;
        }
    }
    return { vowelsCount, consonantsCount };
}
const inputString = "Hello World";
const result = countVowelsAndConsonants(inputString);
console.log(`Vowels: ${result.vowelsCount}, Consonants: ${result.consonantsCount}`);



