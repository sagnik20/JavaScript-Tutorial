const marks = [2,3,4,5,6,7];
const fruits = ['Orange', 'Apple','Pineapple'];
const mixed =['Str',35,65,[3,5]];

const arr =new Array(12,34,56,"Books");

console.log(fruits);
console.log(mixed);
console.log(arr);

console.log(arr[0]);//12
console.log(arr.length);//returns length. Here it is 4
console.log(Array.isArray(arr));//checks whether that vairable is array or not
arr[0] = 'harry';//directly changes the value
console.log(arr[0]);
console.log(arr);

console.log(marks);
let value = marks.indexOf(4);//returns index, count starts from 0
// console.log(value);

// Mutating or Modifying arrays
// marks.push(3453);//adds at end of the array
// console.log(marks);
// marks.unshift(123);//adds at the beginning of the array
// console.log(marks);
// marks.pop();//removes from end of the array
// console.log(marks);
// marks.shift();//removes from the beginning of the array
// console.log(marks);
// marks.splice(1,2);//start from 1 and remove 2 elements
// console.log(marks);
// marks.reverse();//reverses the array
let marks2 = [23,54,67,89,23]
marks2 = marks.concat(marks2);
console.log(marks2);

//Creating Object - stores Key-Value pair 
let myObj = {
    'first name' : 'Sagnik',
    channel : "LearnOverflow",
    marks : [1,2,3,4,5,6],
    isActive : true
}
console.log(myObj);
console.log(myObj['first name']);
