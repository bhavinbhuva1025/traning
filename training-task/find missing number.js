// // "Find Missing Number – Array contains 1...n, one number missing, find it.:-"	given an array of numbers and give pass argunents from and to,
// // it's find missing number by given argument from and to.


function findMissingNumber(arr, from, to) {
    let n = to - from + 1;  
    let expectedSum = (n * (from + to)) / 2;
    let actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}
let arr = [1, 2, 4, 5, 3, 7, 8];
let from = 1;
let to = 8;
let missingNumber = findMissingNumber(arr, from, to);
console.log(`The missing number between ${from} and ${to} is:`, missingNumber);

 

