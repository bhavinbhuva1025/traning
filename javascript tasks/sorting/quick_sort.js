// let arr = [5, 2, 3, 1, 6, 9, 8];
// function quickSort(arr) {
//     if (arr.length < 2) {
//         return arr;
//     }
//     let pivot = arr[0];
//     let left = [];
//     let right = [];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < pivot) {
//             left.push(arr[i]);
//             console.log(left);
//         } else {
//             right.push(arr[i]);
//             console.log(right);
//         }
//     }
//     return quickSort(left).concat(pivot).concat(quickSort(right));
    
// }
// console.log("Quick Sort => ", quickSort(arr));



let arr = [5, 2, 3, 1, 6, 9, 8];
arr.sort()
console.log("Quick Sort => ", arr);