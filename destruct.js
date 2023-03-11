// Object Destructuring

let facts = {numPlanets1: 8, yearNeptuneDiscovered: 1846}
let {numPlanets1, yearNeptuneDiscovered} = facts;

// console.log(numPlanets1); // 8
// console.log(yearNeptuneDiscovered); // 1846
// console.log(facts); //{numPlanets: 8, yearNeptuneDiscovered: 1846}

let planetFacts = {
    numPlanets2: 8, 
    yearNeptuneDiscovered: 1846, 
    yearMarsDiscovered: 1659
};

let {numPlanets2, ...discoveryYears} = planetFacts;

// console.log(numPlanets2); // 8
// console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

function getUserData({firstname, favoriteColor="green"}){
    return `Your name is ${firstname} and you like ${favoriteColor}.`;
}

// console.log(getUserData({firstname: 'Alejandro', favoriteColor: 'purple'})); // 'Your name is Alejandro and you like purple.'
// console.log(getUserData({firstname: 'Melissa'})); // 'Your name is Melissa and you like green.'
// console.log(getUserData({})); // 'Your name is undefined and you like green.'

// Array Destructuring
let [first, second, third] = ['Maya', 'Marisa', 'Chi'];

// console.log(first); // Maya
// console.log(second); // Marissa
// console.log(third); // Chi

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    'Raindrops on roses', 
    'whiskers on kittens', 
    'bright copper kettles',
    'warm woolen mittens', 
    'brown paper packages tied up with strings'
]

// console.log(raindrops); // Raindrops on roses
// console.log(whiskers); // whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // [
// 'bright copper kettles',
// 'warm woolen mittens', 
// 'brown paper packages tied up with strings'
// ]

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

// console.log(numbers); // [10, 30, 20]

// ES2015 Refactoring: 

// 1. ES5 Assigning Variables to Object Properties:
// var obj = {
//     numbers:{
//         a: 1, 
//         b: 2
//     }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

// ES2015 Assigning Variables to Object Properties:
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const { a, b } = obj.numbers;

// console.log(a); // 1
// console.log(b); // 2

// 2. ES5 Array Swap:
// var arr =[1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

// ES2015 Array Swap:
const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

// console.log(arr); // [2, 1]

// Write a function called raceResults which accepts a single array argument. 
// It should return an object with the keys first, second, third, and resizeTo. 
// 1. first: the first element in the array.
// 2. second: the second element in the array.
// 3. third: the third element in the array.
// 4. rest: the rest of the elements in the array.

// Write a one line function to make this work using: 
// 1. An arrow function 
// 2. Destructuring 
// 3. 'Enhanced' object assignment (same key/value shortcut) 

// Such that calling: 
// raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']) 

// Returns: 
// {
//     first: 'Tom', 
//     second: 'Margaret';
//     third: 'Allison', 
//     rest: ['David', 'Pierre']
// }

const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });
// console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']));