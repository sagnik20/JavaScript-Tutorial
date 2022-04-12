console.log("We are learning loops");


//for loop
for(let i=0;i<10;i++)
    console.log(i);

//while loop
let j=0;
console.log("printing j");
while(j<10)
    console.log(j++);

//do-while
let k=110;
console.log("this prints atleast once even if condition is false");
do{
    console.log(k+1);
    k+=1;
}while(k<100);


//break and continue
k=0;
console.log("break example");
do{
    console.log(k);
    if(k==5)
        break;
    k+=1;
}while(k<100);

k=0;
console.log("continue example");
do{
    if(k==5){
        k+=1;
        continue;
    }
    console.log(k);
    k+=1;
}while(k<10);


//forEach
console.log("forEach Example");
let arr=[2,3,5,7,8,9];

arr.forEach(function(element){
    console.log(element);
});

arr.forEach(function(element,index,array){
    console.log(element,index,array);
});
//for-of
for(let key of arr){
    console.log(key);
}



// for-in loop
let obj={
    name:"Sagnik Chattopadhyaya",
    age: 23,
    type:"Lazy",
    os:"Windows"
}

for(let key in obj){
    console.log(obj[key]);
    console.log(`The ${key} of object is ${obj[key]}`);
}