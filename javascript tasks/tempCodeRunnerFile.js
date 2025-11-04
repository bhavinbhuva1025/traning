
// // let limit = 50;
// // const primeNumbers = [];
// // for (let i = 2; i <= limit; i++) {
// //   let isPrime = true; 
// //   for (let j = 2; j < i; j++) {
// //     if (i % j === 0) {
// //       isPrime = false;
// //       break; 
// //     }
// //   }
// //   if (isPrime) {
// //     primeNumbers.push(i);
// //   }
// // }
// // console.log(primeNumbers.toString());


// // let n=9
// // let m=Math.floor(n/2);//m=> mid
// //  let line = "";
// //    for(let i=0; i<n; i++){
// //   for(let j=0; j<n; j++){
// //     if (i < m) {
// //         if (j === 0 || j === m || (i === 0 && j > m)) {
// //           line += "* ";
// //         } else { 
// //           line += "  ";
// //         }
// //       }
// //       else if (i === m) {
// //         line += "* ";
// //       }
// //       else {
// //         if (j === m || j === n - 1 || (i === n - 1 && j < m)) {
// //           line += "* ";
// //         } else {
// //           line += "  ";
// //         }
// //       }
// //   }
// //     line += "\n";
// // }
// //   console.log(line);

// let arr=[
//   {id:1,name:"sachin",age:24},
//   {id:2,name:"rahul",age:25},
//   {id:3,name:"sanket",age:27},
//   {id:4,name:"krish",age:30}
// ];
// let summ=arr.map(function(element){
//  return element.name
// })
// console.log(summ)
// let age=0;
// arr.forEach(function(element)
// {
//         age+=element.age
// })
// console.log(age);

// let arr=[
//   {id:1,name:"sachin",age:24},
//   {id:2,name:"rahul",age:25},
//   {id:3,name:"sanket",age:27},
//   {id:4,name:"krish",age:30}
// ];

// const obj = arr.forEach((element)=>{
//   let un=element.name ,id=element.id ,age=element.age;
//   console.log(Object.values({un,id,age}));

// });

// // let line="";
// // for(let i=5;i>=1;i--){
// //   for(let j=1;j<=5-i;j++){
// //     line+="  ";
// //   }
// /if/   for (let k=1;k<=2*i-1;k++){
// //     if(k===1 || k===2*i-1 || i===5)
// //     {
// //     line+="* ";
// //     }
// //     else{
// //       line+="  ";
// //     }
// //   } 
// //   line+="\n"; 
// // }
// // console.log(line);




// function palindrom(str){
//   let string=str.toLowerCase().replace(/[^a-z0-9]/g, '');
//   let reversed=str.split('').reverse().join('');
//   return string===reversed;
// }
// console.log(palindrom("123") );



// const users = [
//   { id: 101, name: 'Alice', department: 'Engineering' },
//   { id: 102, name: 'Bob', department: 'Marketing' },
//   { id: 103, name: 'Charlie', department: 'Sales' }
// ];
// const particularObject = users.find(user => user.id === 102); 
// const valuesArray = Object.values(particularObject);
// console.log(valuesArray);

// console.log("A");
// setTimeout(() => {
//   console.log("b");
// }, 0);

// const waitForC = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("c");
//       resolve("Do 6+ years of coding"); 
//     }, 0); 
//   });
// };
//       console.log(waitForC());

// console.log("d");

const employees = [
  { name: 'John', age: 35, team: 'Data Structure & Algorithm' },
  { name: 'Doe', age: 26, team: 'DevOps Bootcamp' },
  { name: 'Ben', age: 21, team: 'Data Science' }
];

// employees.forEach(employee => {
//   console.log(`${employee.name} is ${employee.age} years old.`);
// });


//employees.forEach(employee=>{
//     employee.role="Intern";
// })
// console.log(employees);

//employees.forEach((employee,index)=>{
//   console.log(`employee #${index + 1}: Name - ${employee.name}`);
    
// })


// let totalAge = 0;
// employees.forEach(employee => {
//   totalAge += employee.age;
// });
// console.log(`Total age of all employees: ${totalAge}`);



