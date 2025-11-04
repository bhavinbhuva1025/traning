function palindrom(str){
  let string=str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let reversed=string.split('').reverse().join('');
  return string===reversed;
}
console.log(palindrom("123") );