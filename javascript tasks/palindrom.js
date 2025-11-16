

// solve without using built in methods like .reverse() and build own logic, using for   loop and if else block.
function isPalindrome(str) {
    str = str.toLowerCase();  
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false; 
        }
    }
    return true; 
}
let string = "Racecar";
if (isPalindrome(string)) {
    console.log(`${string} is a palindrome.`);
} else {
    console.log(`${string} is not a palindrome.`);
}
