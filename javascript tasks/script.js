
// let limit = 50;
// const primeNumbers = [];
// for (let i = 2; i <= limit; i++) {
//   let isPrime = true; 
//   for (let j = 2; j < i; j++) {
//     if (i % j === 0) {
//       isPrime = false;
//       break; 
//     }
//   }
//   if (isPrime) {
//     return true
//   }
// }
// console.log(primeNumbers.toString());




// let fib=10;
//   const series = [0, 1];
//   for (let i = 2; i < fib; i++) {
//     const nextFib = series[i -1] + series[i - 2];
//     series.push(nextFib);
//   }
// console.log(series.toString())
// scound //   
// const limit = 10;
// const fibonacciSeries = [0, 1];
// let a = 0;
// let b = 1;
// let nextFib = a + b;
// while (nextFib <= limit) {
//   fibonacciSeries.push(nextFib);
//   a = b;
//   b = nextFib;
//   nextFib = a + b;
// }
// console.log(fibonacciSeries.toString());



let arr=[5,8,2,6,4,3,1,7,9];
function mergesort(arr){
    if (arr.length <=1){
        return arr;
    }
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);
    return merge(mergesort(left),mergesort(right)); 

}
function merge(left,right){
    const result=[];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            result.push(left[i]);
            i++;
        }else{
            result.push(right[j]);
            j++;
        }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
}
const sortedArray=mergesort(arr);
console.log(sortedArray);
 