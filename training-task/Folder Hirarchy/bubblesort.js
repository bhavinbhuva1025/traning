let arr=[5,8,1,3,7,9,2];
console.log("Original Array:", arr);
length=arr.length;
for(let i=0; i<length-1; i++){
    for(let j=0; j<length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}
console.log("Sorted Array:", arr);