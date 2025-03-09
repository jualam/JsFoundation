const squareNumbers = (arr) => arr.map(num=>num*num);
console.log(squareNumbers([1, 2, 3, 4])); // [1, 4, 9, 16]


const filterEvenNumbers = (arr) => arr.filter(num=>num%2===0);
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

const sumPositiveNumbers = (arr) => arr.filter(num=>num>0).reduce((sum,num)=>sum+num,0);
console.log(sumPositiveNumbers([-3, 2, -1, 5, 7])); // 2 + 5 + 7 = 14

const getNames = (arr) => arr.map(obj => obj.name);
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
console.log(getNames(people)); // ["Alice", "Bob", "Charlie"]

//arr.reduce(callbackFunction, initialValue);
const findLongestWord = (arr) => 
    arr.reduce((longest, current) => current.length > longest.length ? current : longest, "");
console.log(findLongestWord(["apple", "banana", "grapefruit", "kiwi"])); // "grapefruit"
