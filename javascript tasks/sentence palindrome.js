// solve without using built in methods like .reverse() and build own logic, using for   loop and if else block.
function palindrome(str){
    let cleanedstr = '';
    for(let i = 0; i < str.length; i++){
        const char = str[i];
        if(char !== ' '){
            cleanedstr += char.toLowerCase();
        }
    }
    const len = cleanedstr.length;
    for(let i = 0; i < len / 2; i++){
        if(cleanedstr[i] !== cleanedstr[len - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("naman as a manan")); 
console.log(palindrome("121"));              