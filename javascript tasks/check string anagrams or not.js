

function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {    
    return false;
  }
  const charCount1 = {};
  const charCount2 = {};
    for (let char of str1) {
    charCount1[char] = (charCount1[char] || 0) + 1;
    }
    for (let char of str2) {
    charCount2[char] = (charCount2[char] || 0) + 1;
    
    }
    for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
    }
    return true;
}
const str1 = "listen";
const str2 = "silent";

const isAnagram = areAnagrams(str1, str2);
        if (isAnagram) {
            console.log("Anagram");
        } 
        else {
            console.log("Not Anagram");
        }




  
     


  
