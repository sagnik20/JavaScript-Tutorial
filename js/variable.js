console.log('variables is JS');

//var - Global scope
//let - Block level scope
//const - Constant variable. We cannot change its value once set. Also we have to do initialization to that variable once it is declared.

var name = "Sagnik";
console.log(name);
var channel = 'LearnOverflow'

// var name = 'Sagnik';
// console.log(name);

var name = `Sa'gn"ik`;
var marks = 99;
console.log(name, channel,marks);

/*
Rules for Variable naming

1. Cannot start with number
2. Can start with letter, numbers, _ or $
3. Are case sensitive
*/

const fruit = "apple";
//const owner ;// this is an error
//fruit = "Guava"; // this is an error
console.log(fruit);

var city  = "Delhi";
{
    let city = "Kolkata";
    console.log(city);//this will print Kolkata
}
console.log(city);//this will print Delhi

const arr = [1,2,3,4,5,6];
console.log(arr);
arr.push(7);//adds an element into the array even though it is declared as const

//arr = [1,2,3,4,5,6,7]  // this will give error
console.log(arr);
arr.pop();// removes the last element from the array
console.log(arr);

/*
Most common Programming Case Types
1. camelCase
2. kebab-case
3. snake_case
4. PascalCase

*/