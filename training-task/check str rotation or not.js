function rotationstr(str1, str2) {
    let n = str1.length;
    for(let i=0; i<n; i++) {
        let currot="";
        for(let j=0; j<n; j++) {
            let rotind=(j+i)%n;
            currot+=str1[rotind];
        }
        if(currot===str2) {
            return true;
        }   
    }
    return false;
}
let str1="abcdc";
let str2="cdabb";
let result=rotationstr(str1, str2);
if(result) {
    console.log("the string is rotation?:", result);
}
else {
    console.log("the string is rotation?:", result);
}

