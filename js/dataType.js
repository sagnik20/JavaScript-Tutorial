console.log("DataTypes in JS");

/*
Mainly of two types
1. Primitive Datatype - uses Stack internally
2. Reference Datatype - uses Heap internally

1. Primitive Datatype
1.1. String //'name'
1.2. Numbers //23
1.3. Boolean //true false
1.4. Null //
1.5. undefined // var name; without initialization its underfined 
1.6. symbol //new ES6 feature

2. Reference Datatype
2.1. Arrays
2.2. Object Literals
2.3. functions
2.4. Dates
*/ 

//Primitive Datatype

//String
let name = "Sagnik";
console.log("My String is " + name);
console.log("Datatype is "+ (typeof name));

//Numbers
let marks = 34;
console.log("Datatype is "+ (typeof marks));

//Boolean
let isDriver = true;
console.log("Datatype is "+ (typeof isDriver));

//Null
let nullVar = null;
console.log("Datatype is "+ (typeof nullVar));

//Undefined
let undef = undefined;
console.log("Datatype is "+ (typeof undef));

//Reference Datatype

// Arrays
let myarr = [1,2,3,4,5,false,"string"]
console.log(myarr);
console.log("Datatype is "+ (typeof myarr));

// Object Literal
let stMarks={
    sagnik:99,
    manisha:100,
    venky:98
}
console.log(stMarks);
console.log("Datatype is "+ (typeof stMarks));

function findName(){

}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);
