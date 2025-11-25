function vowelcount(str){
    let vowelcount = 0;
    let consonantcount = 0;
    const vowels = 'aeiouAEIOU';
    for(let i=0; i< str.length; i++){
    if(vowels.includes(str[i])){
        vowelcount++;
    }
    else{
        consonantcount++;
    }
}
return{vowelcount, consonantcount};
}

console.log(vowelcount("Hello World"));