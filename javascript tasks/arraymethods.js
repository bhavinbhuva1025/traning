
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

// console.log(Array.from('hello'));
// Output: ['h', 'e', 'l', 'l', 'o']



// console.log(Array.isArray([1, 2])); // Output: true

// console.log(Array.of(1, 2, 3));
// Output: [1, 2, 3]


// const arr = [1, 2, 3];
// console.log(arr.length); // Output: 3

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// console.log(arr1.concat(arr2)); // Output: [1, 2, 3, 4]


// const arr = [1, 2, 3, 4, 5];
// console.log(arr.copyWithin(0, 3));
// // Output: [4, 5, 3, 4, 5]


// const arr = ['a', 'b'];
// const iterator = arr.entries();
// console.log(iterator.next().value); // Output: [0, 'a']

// const arr = [12, 54, 18];
// const isBigEnough = (el) => el >= 10;
// console.log(arr.every(isBigEnough)); // Output: true


// const arr = [1, 2, 3];
// console.log(arr.fill(0, 1, 2));
// // Output: [1, 0, 3]

// const arr = [1, 2, 3, 4];
// const evens = arr.filter(num => num % 2 === 0);
// console.log(evens); // Output: [2, 4]


// const arr = [1, 5, 10, 15];
// console.log(arr.find(num => num > 10));
// // Output: 15

// const arr = [1, 5, 10, 15];
// console.log(arr.findIndex(num => num > 10));


// const arr = [1, 5, 10, 15];
// console.log(arr.findLast(num => num > 5));
// // Output: 15


// const arr = [1, 5, 10, 15, 20];
// console.log(arr.findLastIndex(num => num > 10));
// // Output: 


// const arr = [1, [2, 3], [4, [5, 6]]];
// console.log(arr.flat(2));
// // Output: [1, 2, 3, 4, 5, 6]

// const arr = [1, 2, 3];
// console.log(arr.flatMap(x => [x, x * 2]));
// // Output: [1, 2, 2, 4, 3, 6]

// const arr = ['a', 'b', 'c'];
// arr.forEach(el => console.log(el));
// // Output: a, b, c (each on new line)

// const arr = [1, 2, 3];
// console.log(arr.includes(2)); // Output: true

// const arr = ['apple', 'banana', 'apple'];
// console.log(arr.indexOf('apple')); // Output: 0

// const arr = ['Fire', 'Air', 'Water'];
// console.log(arr.join('-')); // Output: "Fire-Air-Water"

// const arr = ['a', 'b'];
// const iterator = arr.keys();
// console.log(iterator.next().value); // Output: 0

// const arr = ['apple', 'banana', 'apple'];
// console.log(arr.lastIndexOf('apple')); // Output: 2

// const arr = [1, 4, 9];
// const roots = arr.map(num => Math.sqrt(num));
// console.log(roots); // Output: [1, 2, 3]

// const arr = [1, 2, 3];
// console.log(arr.pop()); // Output: 3
// console.log(arr); // Output: [1, 2]

// const arr = [1, 2];
// console.log(arr.push(3, 4)); // Output: 4
// console.log(arr); // Output: [1, 2, 3, 4]

// const arr = [1, 2, 3, 4];
// const sum = arr.reduce((acc, current) => acc + current, 0);
// console.log(sum); // Output: 10


// const arr = [1, 2, 3];
// const result = arr.reduceRight((acc, cur) => acc / cur);
// console.log(result); // Output: 1.5 (3/2/1)

// const arr = [1, 2, 3];
// const result = arr.reduceRight((acc, cur) => acc / cur);
// console.log(result); // Output: 1.5 (3/2/1)

// const arr = [1, 2, 3];
// console.log(arr.shift()); // Output: 1
// console.log(arr); // Output: [2, 3


// const arr = ['a', 'b', 'c', 'd'];
// console.log(arr.slice(1, 3));
// // Output: ['b', 'c']

// const arr = [1, 2, 3, 4];
// console.log(arr.some(num => num > 3)); // Output: true

// const arr = [1, 2, 3, 4];
// console.log(arr.some(num => num > 3)); // Output: true

// const arr = [3, 1, 4, 1, 5];
// arr.sort((a, b) => a - b);
// console.log(arr); // Output: [1, 1, 3, 4, 5]


// const arr = [1, 2, 3, 4];
// arr.splice(1, 2, 'a', 'b');
// console.log(arr); // Output: [1, 'a', 'b', 4]


// const arr = [1000, 2000];
// console.log(arr.toLocaleString());
// // Output (e.g., in US): "1,000, 2,000"


// const arr = [1, 2, 3];
// console.log(arr.toReversed()); // Output: [3, 2, 1]
// console.log(arr); // Output: [1, 2, 3]

// const arr = [3, 1, 2];
// console.log(arr.toSorted()); // Output: [1, 2, 3]
// console.log(arr); // Output: [3, 1, 2


// const arr = [1, 2, 3];
// console.log(arr.toSpliced(1, 1, 'a')); // Output: [1, 'a', 3]
// console.log(arr); // Output: [1, 2, 3]

// const arr = [1, 2, 'c'];
// console.log(arr.toString()); // Output: "1,2,c"

// const arr = [3, 4];
// console.log(arr.unshift(1, 2)); // Output: 4
// console.log(arr); // Output: [1, 2, 3, 4]

// const arr = ['a', 'b'];
// const iterator = arr.values();
// console.log(iterator.next().value); // Output: 'a'

// const arr = [1, 2, 3];
// console.log(arr.with(1, 5)); // Output: [1, 5, 3]
// console.log(arr); // Output: [1, 2, 3]