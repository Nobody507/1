let arr = ['Alex', 'John', 'Bob', 'Amir', 'Azizbek', 'Tyler']
let arr2 = ['Davlat', 'Arslan', 'Steve', 32, true, 45]

let newArr = arr.concat(arr2).slice(0, 9).filter(item => item.charAt(0) == 'A')

console.log(newArr);