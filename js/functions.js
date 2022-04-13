console.log("Funtions tutorial");

function greet(name,reply="Thanks a lot"){//reply has a default value;

    console.log(`Happy Birthday ${name}.
    Wow ${reply}`);

    let mag = `Happy Birthday ${name}. i'm so happy for you. Enjoy Your day!
    Wow ${reply} returned` 

    return mag;
}

//Annonymous Function
const mygreet = function(name,reply="Thanks a lot"){

    console.log(`Happy Birthday ${name}.
    Wow ${reply}`);

    let mag = `Happy Birthday ${name}. i'm so happy for you. Enjoy Your day!
    Wow ${reply} returned` 

    return mag;
}

greet('Rohan',"Thank you");
let val = greet("Venky");
console.log(val);


console.log("From function mygreet");
val = mygreet("Venky");
console.log(val);



const myobj = {
    name: "Learn Overflow",
    description: function(){
        return "A YouTube channel"
    }
}
console.log(myobj.name,myobj.description());
