function sortByFrequency(arr) {

    let frequencyMap = {};
    for (let i = 0; i < arr.length; i++) {
        let ele = arr[i];
        if (frequencyMap[ele]) {
            frequencyMap[ele]++;
        } else {
            frequencyMap[ele] = 1;
        }
    }           
    let frequencyArray = [];
    for (let key in frequencyMap) {
        frequencyArray.push([parseInt(key), frequencyMap[key]]);
    }
    for (let i = 0; i < frequencyArray.length - 1; i++) {   
        for (let j = i + 1; j < frequencyArray.length; j++) {
            if (frequencyArray[i][1] > frequencyArray[j][1]) {
                let temp = frequencyArray[i];
                frequencyArray[i] = frequencyArray[j];
                frequencyArray[j] = temp;
            }   
        }
    }
    let sortedResult = [];
    for (let i = 0; i < frequencyArray.length; i++) {
        let ele = frequencyArray[i][0];
        let count = frequencyArray[i][1];
        for (let j = 0; j < count; j++) {
            sortedResult.push(ele);
        }
    }
    return sortedResult;
}

let arr = [4, 6, 2, 6, 7, 4, 4, 2, 6, 8, 8, 8, 8];
let sortedByFrequency = sortByFrequency(arr);
console.log("Original Array:", arr);
console.log("Sorted by Frequency:", sortedByFrequency);