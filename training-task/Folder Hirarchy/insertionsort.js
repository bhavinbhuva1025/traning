let arr=[5,8,1,3,7,9,2];
console.log("Original Array:", arr);       
for(let i=1; i<arr.length; i++){
    let key=arr[i];
    let j=i-1;  

    while(j>=0 && arr[j]>key){
        arr[j+1]=arr[j];
        j=j-1;
    }   
    arr[j+1]=key;
}
console.log("Sorted Array:", arr);




