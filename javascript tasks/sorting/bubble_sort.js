// ** bubble sort **

let arr = [5, 2, 3, 1, 6, 9, 8];
for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - 1-j; i++) {
    
        if (arr[i] > arr[i + 1]) {
            c = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = c;
        }
    } 
}
console.log(arr);

// const arr = [64, 34, 25, 12, 22, 11, 90, 5];
// const n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             const temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log("Sorted Bubble sort array:", arr);