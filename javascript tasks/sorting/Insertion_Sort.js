// ** DSA Insertion_Sort ** //

let arr = [5, 3, 1, 2, 9, 7, 8];
let n=arr.length;

for (i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
            c = arr[i];
            arr[i] = arr[j];
            arr[j] = c;
        }
    } 
}
console.log(arr);

// const my_array = [64, 34, 25, 12, 22, 11, 90, 5];
// const n = my_array.length;

// for (let i = 0; i < n; i++) {
//     let insert_index = i;
//     let current_value = my_array.splice(i, 1)[0]; 

//     for (let j = i - 1; j >= 0; j--) 
//         if (my_array[j] > current_value) {
//             insert_index = j;
//         }
    
//     my_array.splice(insert_index, 0, current_value);
// }

// console.log("Sorted array:", my_array);