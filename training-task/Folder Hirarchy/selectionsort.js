let arr=[5,8,1,3,7,9,2,4,6];
console.log("Original Array:", arr);
let a=0,b=0;
let n=arr.length;
for(let i = 0; i <n -1; i++){
    a++;
    let min_index=i;
    for(let j = i+1; j <n; j++){
        b++;
        if(arr[j] < arr[min_index]){
            min_index = j;
        }
    }
    if(arr[min_index] !== arr[i]){
        [arr[i],arr[min_index]]=[arr[min_index],arr[i]]
    }
}
console.log("a is =",a,"b is =",b);
console.log("Sorted Array:", arr);