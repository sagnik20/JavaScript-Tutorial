// type conversion and coercion
let myVar;
myVar=34;
// console.log(myVar,(typeof myVar));

myVar = "34";
// console.log(myVar,(typeof myVar));

let booleanVar = true;
// console.log(booleanVar,(typeof booleanVar));

booleanVar = String(true);
// console.log(booleanVar,(typeof booleanVar));

let date = new Date();
// console.log(date,(typeof date));

date = String(new Date());
// console.log(date,(typeof date));

let arr = [1,2,3,4,5];
// console.log(arr,(typeof arr));
// console.log(arr.length,(typeof arr));

arr = String([1,2,3,4,5]);
// console.log(arr,(typeof arr));
// console.log(arr.length,(typeof arr));

let i=8;
// console.log(i,i.toString());

let stri = Number('3214');
// console.log(stri,(typeof stri)); // 3214

stri = Number('32d14');
// console.log(stri,(typeof stri));//NaN

stri = Number(false);
// console.log(stri,(typeof stri)); //0

stri = Number([1,2,3,4,5,6,7,8]);
// console.log(stri,(typeof stri));//NaN

let numver = parseInt('34.029');
console.log(numver,(typeof numver));
numver = parseFloat('34.029');
console.log(numver,(typeof numver));
console.log(numver.toFixed(2),(typeof numver));//gives the number of digits we want ot see after decimal

let mystr = "698";
let mynum = 89;

console.log(mystr + mynum);

//number +string = string
//number +number = number