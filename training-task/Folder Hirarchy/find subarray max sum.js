function maxsbarr(arr){
    let maxsm=arr[0];
    let cursm=arr[0];
    for(let i=1 ; i<arr.length; i++){
        cursm=Math.max(arr[i],cursm+arr[i]);
        maxsm=Math.max(maxsm,cursm);    
    }
    return maxsm;
}
let arr=[-2,1,-3,4,-1,2,1,-5,4];
console.log("Original Array:", arr);
console.log("Maximum Subarray Sum:", maxsbarr(arr));