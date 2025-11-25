let arr=[5,8,1,3,7,9,2];
console.log("Original Array:", arr);
function mergesort(arr){
    if(arr.length <= 1){
        return arr;
    } 
    let mid= Math.floor(arr.length/2);
    let left = mergesort(arr.slice(0, mid));
    let right = mergesort(arr.slice(mid));
    return merge(left,right);
}
function merge(left,right){
    let result =[];
    let a=0;
    let b=0;
    while(a < left.length && b < right.length){
        if(left[a]< right [b]){
            result.push(left[a]);
            a++;
        }   
        else{
            result.push(right[b])
            b++;
        }
    }
    return result.concat(left.slice(a)).concat(right.slice(b));
}
console.log("Sorted Array:", mergesort(arr));