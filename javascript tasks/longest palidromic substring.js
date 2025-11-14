
// Longest Palindromic Substring – Find the longest substring which is a palindrome:-	impliment a pairwise logic in longest palindrome sentence finding a longest 
// palindrooe substring.

function longestPalindromicSubstring(s) {
    let longest = '';
    const length = s.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j <= length; j++) {
            const substring = s.slice(i, j);
            if (isPalindrome(substring) && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;


}
function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example usage:
console.log(longestPalindromicSubstring("babad")); // "bab" or "aba"
console.log(longestPalindromicSubstring("cbbd")); // "bb"
console.log(longestPalindromicSubstring("a")); // "a"
console.log(longestPalindromicSubstring("ac")); // "a" or "c"
