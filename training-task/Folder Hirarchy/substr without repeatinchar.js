function substrwithoutrepeatchar(str){
    let len=0;
    for(let i=0; i<str.length; i++){
        let charSet=new Set();
        let currlen=0
        for(let j=i; j<str.length; j++){
            if(charSet.has(str[j])){
                break;
            }   
            charSet.add(str[j]);
            currlen++;
        }
        len=Math.max(len,currlen);
    }
    return len;
}
let str="abcabcbb";
console.log("Input String:", str);
console.log("Length of Longest Substring without Repeating Characters:", substrwithoutrepeatchar(str));