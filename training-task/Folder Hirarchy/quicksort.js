let arr=[5,8,1,3,7,9,2,4,6];
console.log("Original Array:", arr);
function quicksort(arr) {
    if(arr.length < 2){
        return arr;
    }
    let pivot = arr[0];
    let left =[];
    let right =[];
    for(let i=1; i<arr.length; i++){
        if(arr[i] <pivot){
            left.push(arr[i]);
        }
        else{
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(pivot).concat(quicksort(right));
}
console.log("Sorted Array:", quicksort(arr));