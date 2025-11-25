function longpalindrome(str){
    let long="";
    let len=str.length;
    for(let i=0;i<len;i++){
        for(let j=i+1;j<len;j++){
            let substr=str.substring(i,j);
            if(isPalindrome(substr) && substr.length>long.length){
                long=substr;
            }
        }
    }
    return long;
}   
function isPalindrome(s){
    let left=0;
    let right=s.length-1;
    while(left<right){
        if(s[left]!==s[right]){
            return false;
        }
        left++;
        right--;
    }   
    return true;
}
let str="babad";    
console.log("Longest Palindromic Substring:", longpalindrome(str));
