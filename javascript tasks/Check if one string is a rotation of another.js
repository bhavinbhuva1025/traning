function isRotationBasic(str1, str2) {

    const len = str1.length;

    for (let i = 0; i < len; i++) {
        let currentRotation = "";

        for (let j = 0; j < len; j++) {
            const rotatedIndex = (i + j) % len;
            currentRotation += str1[rotatedIndex];
        }

        if (currentRotation === str2) {
            return true; 
        }
    }

    return false;
}

const s1 = "waterbottle";
const s2 = "erbottlewat"; 
const s3 = "bottlewater"; 

console.log(` ${isRotationBasic(s1, s2)}`); 
console.log(` ${isRotationBasic(s1, s3)}`);




