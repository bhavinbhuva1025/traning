
//  let line = "";
//   for(let i=1; i<=5; i++){
//   for(let j=1; j<=i; j++){
//     line += "*";
//   }
//   line += "\n";
// }
//   for(let i=5; i>=1; i--){
//   for(let j=1; j<=i; j++){
//     line += "*";
//   }
//   line += "\n";
// }
// for(let i=5; i>=1; i--){
//   for(let j=1; j<=5-i; j++){
//     line += " ";
//   }
//   for(let k=1; k<=2*i-1; k++){
//     line += "*";
//   }
//   line += "\n";
// }
//   console.log(line);


//  let line = "";
   
//  for(let i=5; i>=1; i--){
//   for(let j=1; j<=5-i; j++){
//     line += " ";
//   }
//   for(let k=1; k<=i; k++){
//     line += "*";
//   }
//   line += "\n";
// }
//   console.log(line);           

// //   *****
// //    ****
// //     ***
// //      **
// //       *

// for(let i=1; i<=5; i++){
//   for(let j=1; j<=5-i; j++){
//     line += "";
//   }
//   for(let k=1; k<=i; k++){
//     line += "*";
//   }
//   line += "\n";
// }




// 2 this type of pattern printing
// for(let i=5; i>=1; i--){
//   for(let j=1; j<=5-i; j++){
//     line += "   ";
//   }
//   for(let k=1; k<=i; k++){
//     line += "$  ";
//   }
//   line += "\n";
// }
  
//   for(let i=1; i<=5; i++){
//   for(let j=1; j<=5-i; j++){
//     line += "   ";
//   }
//   for(let k=1; k<=i; k++){
//     line += "%  ";
//   }
//   line += "\n";
//  }
// for(let i=5; i>=1; i--){
//   for(let j=1; j<=i; j++){
//     line += "%  ";
//   }
//   line += "\n";
// }
//   for(let i=1; i<=5; i++){
//   for(let j=1; j<=i; j++){
//     line += "$  ";
//   }
//   line += "\n";
// }



// [] this type pattern printing
// for(let i=1; i<=5; i++){
//   for(let j=1; j<=7; j++){
//     if(j===1 || i===5 || j===7|| i===1){ 
//     line += " *";
//     }
//     else{
//       line += "  ";
//     }
//   }
//     line += "\n";
// }
//   console.log(line);

// ^ this type pattern printing
// for(let i=1; i<=5; i++){
// for(let j=1; j<=5-i; j++){
//     line1 += " ";
// }   
//     for(let k=1; k<=2*i-1; k++){
//         // line += "*";
//         if(k===1||k===2*i-1){
//   line1 += "*";
// }
// else{
//   line1 += " ";
// }
//     }
// line1 += "\n";       

// }
// for(let i=5-1; i>=1; i--){
// for(let j=1; j<=5-i; j++){
//     line1 += " ";
// }   
//     for(let k=1; k<=2*i-1; k++){
//         // line += "*";
//         if(k===1||k===2*i-1){
//   line1+= "*";
// }
// else{
//   line1 += " ";
// }
//     }
// line1 += "\n";       

// }

// >< this type pattern printing
// let line = "";
//  for(let i=1; i<=5; i++){
//   let f="";
//   let s="";
//   for(let j=1; j<=i; j++){
//     f += " *";
//   }for(let j=1; j<=5-i; j++){
//     s += "    ";
//   }
//   for(let k=1; k<=i; k++){
//     s += " *";
//   }
//   line += f +s+"\n";
// }
// for(let i=5-1; i>=1; i--){
//   let f="";
//   let s="";
//   for(let j=1; j<=i; j++){
//     f += " *";
//   }for(let j=1; j<=5-i; j++){
//     s += "    ";
//   }
//   for(let k=1; k<=i; k++){
//     s += " *";
//   }
//   line += f +s+"\n";
// }
// console.log(line);


//  [<>] this type pattern printing
// let line = "";
// for(let i=5; i>=1; i--){
//   let f="";
//   let s="";
//   for(let j=1; j<=i; j++){
//     f += " *";
//   }for(let j=1; j<=5-i; j++){
//     s += "    ";
//   }
//   for(let k=1; k<=i; k++){
//     s += " *";
//   }
//   line += f +s+"\n";
// }
//  for(let i=1; i<=5; i++){
//   let f="";
//   let s="";
//   for(let j=1; j<=i; j++){
//     f += " *";
//   }for(let j=1; j<=5-i; j++){
//     s += "    ";
//   }
//   for(let k=1; k<=i; k++){
//     s += " *";
//   }
//   line += f +s+"\n";
// }

// console.log(line);



/*  *
   ***
  *****
   ***
    */
// let line1 = "";
// let line = "";

//  for(let i=1; i<=5; i++){
//   let f="";
//   let s="";
//   for(let j=1; j<=5-i; j++){
//     f += "  ";
//   }for(let j=1; j<=i; j++){
//     s += "* ";
//   }
//   for(let k=1; k<=i-1; k++){
//     s += "* ";
//   }
//   line += f +s+"\n";
// }
//  for(let i=5-1; i>=1; i--){
//   let f="";
//   let s="";
//   for(let j=1; j<=5-i; j++){
//     f += "  ";
//   }for(let j=1; j<=i; j++){
//     s += "* ";
//   }
//   for(let k=1; k<=i-1; k++){
//     s += "* ";
//   }
//   line += f +s+"\n";
// }


/*     *
    *  *  *
 * * * * * * *
    *  *  *
       *         this type pattern*/


//        let line = "";

//    for(let i=1; i<=5; i++){
//   let f="";
//   let s="";
//   for(let j=1; j<=5-i; j++){
//     f += "  ";
//   }for(let j=1; j<=i; j++){
//       if(j===1||j===i||i===5){
//     s += "* ";
//     }
//     else{
//     s += "  ";

//     }
//   }
//   for(let k=1; k<=i-1; k++){
//      if(k===i-1||i===5){
//     s += "* ";
//     }
//     else{
//     s += "  ";

//     }
//   }
//   line += f +s+"\n";
// }
//  for(let i=5-1; i>=1; i--){
//   let f="";
//   let s="";
//   for(let j=1; j<=5-i; j++){
//     f += "  ";
//   }for(let j=1; j<=i; j++){
//     if(j===1||j===i||i===5){
//     s += "* ";
//     }
//     else{
//     s += "  ";

//     }
//   }
//   for(let k=1; k<=i-1; k++){
//      if(k===i-1||i===5){
//     s += "* ";
//     }
//     else{
//     s += "  ";

//     }
//   }
//   line += f +s+"\n";
// }
// console.log(line)


    //                * * * * *
//                 // * *   * *
//                 // *   *   *
//                 // * *   * *
//                 // * * * * *


//  let line = "";
//    for(let i=0; i<7; i++){
//     let f="";
//   for(let j=0; j<7; j++){
//    if (i === 0  || i===7 - 1 ||j === 0 || j === 7 - 1 || i === j || i + j === 7 - 1) {
//         f += "* ";
//       } else {
//         f += "  "; 
//       }
//   }
//     line += f+"\n";
// }
//   console.log(line);

  //                  * * * * *
//                 // *   *   *
//                 // * * * * *
//                 // *   *   *
//                 // * * * * *

// let m=Math.floor(7 / 2);
//  let line = "";
//    for(let i=0; i<7; i++){
//     let f="";
//   for(let j=0; j<7; j++){
//    if (i === 0  || i===7 - 1 ||j === 0 || j === 7 - 1 || i === m||j===m) {
//         f += "* ";
//       } else {
//         f += "  "; 
//       }
//   }
//     line += f+"\n";
// }
//   console.log(line);

    // *   * * * 
    // *   *   
    // * * * * *
    //     *   *
//  // * * *   *
// let n=9
// let m=Math.floor(n/2);//m=> mid
//  let line = "";
//    for(let i=0; i<n; i++){
//     let f="";
//   for(let j=0; j<n; j++){
//     if (i < m) {
//         if (j === 0 || j === m || (i === 0 && j > m)) {
//           line += "* ";
//         } else {
//           line += "  ";
//         }
//       }
//       else if (i === m) {
//         line += "* ";
//       }
//       else {
//         if (j === m || j === n - 1 || (i === n - 1 && j < m)) {
//           line += "* ";
//         } else {
//           line += "  ";
//         }
//       }
//   }
//     line += f+"\n";
// }
//   console.log(line);

//  *****
//   *-*
//    *    hollow pattern
// let line = "";
//   for(let i=5; i>=1; i--){
//   for(let j=1; j<=5-i; j++){
//    line+=" "
//   }
//   for(k=1; k<=2*i-1;k++){
//         if(k===1||k===2*i-1||i===5){
//     line += "*";
//     }else{
//         line+=" ";
//     }
//   }
//   line += "\n";
// }
 
// console.log(line)





// // for(i=1; i<=20; i++){
// //     if(i%2===0){
// //     console.log(i + " is an even number");
// //     }
// //     else{
// //         console.log(i + " is an odd number");
// //     }
// // }


// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr.forEach((value,arr) =>{
//     if(value%2!==0){
//         console.log(value + " is an odd number at index ",arr);
//     }
// });

// let str = "BHUVA BHAVIN";  
// let val =str.split(" ");
// let r = val[0].charAt(0).toLowerCase()+ val[0].slice(1)+ val[1].charAt(0).toLowerCase() +val[1].slice(1);
// console.log(r);



// let str = "this is a string that don't define any things."
// let val = str.split(" ")
// for (let i = 0; i < val.length; i++) {
//     if (!(val[i].length == 1)) {
//         val[i] = val[i].charAt(0).toUpperCase() + val[i].slice(1)
//     }
// }
// console.log(val.join(" "))



// let str1 = "this is a string that don't define any things."
// let val1 = str.split(" ")  
// let result = val.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
// console.log(val);
// console.log(result);



// let str="BhUvA BhaViN";
// let f=str.includes(0,6);
// let val=f.replace(/[a-z]/g,(match) =>{
//     return match.toUpperCase();
// });
   

// console.log(str);
// console.log(val);



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
//     primeNumbers.push(i);
//   }
// }
// console.log(primeNumbers.toString());





// let line="";

// for(let i=8;i>=1;i--){
//   let f=""
//   let s="";
//     for(let j=1;j<=i;j++){
//             if(j===1||j===i||i===8){
//           f += "* ";
//       }else{
//           f += "  ";

//       }
      
//     }
//      for(let j=1;j<=8-i;j++){
//           s += "    ";
      
//     }
//     for(let k=1;k<=i;k++){
//            if(k===1||k===i||i===8){
//           s += "* ";
//       }else{
//           s += "  ";

//       }
//     }
//     line += f+s+"\n";
// }
// for(let i=1;i<=8;i++){
//   let f=""
//   let s="";
//     for(let j=1;j<=i;j++){
      // if(j===1||j===i||i===8){
      //     f += "* ";
      // }else{
      //     f += "  ";

      // }
//     }
//      for(let j=1;j<=8-i;j++){
//           s += "    ";
      
//     }
//     for(let k=1;k<=i;k++){
    //   if(k===1||k===i||i===8){
    //       s += "* ";
    //   }else{
    //       s += "  ";
    
    //   }
    // }
//     line += f+s+"\n";
// }
// console.log(line)
