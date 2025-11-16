// Longest substring without repeating characters.:-	split the string and using nested for loop.
function substringwithoutrepeatingchar(s) {
    let length = 0;  
    for (let i = 0; i < s.length; i++) {
        let char = new Set();
        let crrlength = 0;  
        for (let j = i; j < s.length; j++) {
            if (char.has(s[j])) {
                break;
            }
            char.add(s[j]);
            crrlength++;
        }
        length = Math.max(length, crrlength);
    }
    return length;
}
const inputString = "abcabcbb";
console.log(substringwithoutrepeatingchar(inputString));