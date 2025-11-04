// ** DSA selection  Sort ** //

// let a = 0;
// let b = 0;
// let arr = [5, 2, 3, 1, 6, 9, 8];
// for (let i = 0; i < arr.length - 1; i++) {
//     min_index = i;
//     a++;
//     for (let j = i + 1; j < arr.length; j++) {
//         b++;
//         if (arr[min_index] >= arr[j]) {
//             min_index = j;
//         }
//     }
//     if (min_index === i) continue;
//     let deleted = arr.splice(min_index, 1);
//     arr.splice(i, 0, deleted[0]);
//     console.log(arr);
//     console.log(min_index);
// }

// console.log("A => ", a);
// console.log("B => ", b);
// console.log("Sorted arr is", arr);


const arr = [64, 34, 25, 5, 22, 11, 90, 12]; 
const n = arr.length;
for (let i = 0; i < n - 1; i++){
    let min_index = i;

    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[min_index]) {
            min_index = j;
        }
    }

    if (min_index !== i) {
        [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
    } 
}

console.log("Sorted selection sort array:", arr.toString());
