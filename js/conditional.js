// console.log("Make sure to uncomment Line 21 in index.html");

const age = "18";

// == checks for only value
if(age==19){
    console.log("Age is 19");
}
else if(age ==65){
    console.log("Age is 65");
}
else{
    console.log("Age is"+" "+age);
}

// === checks for type of variable and its value
if (age === 23)
    console.log("same type "+age);
else
    console.log("different type "+age);

// != checks for not equal to
if(age!=19){
    console.log("Age is not 19");
}
else if(age !=65){
    console.log("Age is not 65");
}
else{
    console.log("Age is"+" "+age);
}



// !== checks for type of variable and its value and not equal to
if (age !== 23)
    console.log("different type "+age);
else
    console.log("same type "+age);



//checks if the variable is defined or not
if(typeof vari !== 'undefined')
    console.log("vari is not defined");
else
    console.log("vari is defined");


//ternary oeprator
console.log(age == 23?'age is 23':"age is not 23");



//switch case
switch (age) {
    case "18":
        console.log("your age is 18");
        break;
    case "28":
        console.log("your age is 28");
        break;
    case "38":
        console.log("your age is 38");
        break;
    default:
        console.log("your age is not defined");
        break;
}