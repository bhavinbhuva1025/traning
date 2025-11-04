// // DSA Merge Sort

// let arr = [5, 2, 3, 1, 6, 9, 8];
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;

//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }
// function merge(left, right) {
//     let result = [];
//     let i = 0;
//     let j = 0;
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i]);
//             i++;
//         } else {
//             result.push(right[j]);
//             j++;
//         }
//     }
// return result.concat(left.slice(i)).concat(right.slice(j));
// }

// console.log("Sorted array is => ", mergeSort(arr));

















let arr = [5, 2, 3, 1, 6, 9, 8];
function mergesort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    console.log("hii",mid)
    let left=mergesort(arr.slice(0,mid));          
    console.log(" mergesort ~ left:", left)
    let right=mergesort(arr.slice(mid));
    return merge(left,right);
}
function merge(left,right){
    let result=[];
    let a=0;
    let b=0;
    while(a<left.length && b<right.length){
        if(left[a]<right[b]){
            result.push(left[a]);
            a++;
        }else{
            result.push(right[b]);
            b++;

        }
    }
    return result.concat(left.slice(a)).concat(right.slice(b));

}
console.log(mergesort(arr));


