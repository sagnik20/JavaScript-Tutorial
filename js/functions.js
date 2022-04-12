console.log("Funtions tutorial");

function greet(name,reply="Thanks a lot"){

    console.log(`Happy Birthday ${name}.
    Wow ${reply}`);

    let mag = `Happy Birthday ${name}. i'm so happy for you. Enjoy Your day!
    Wow ${reply} returned` 

    return mag;
}

greet('Rohan',"Thank you");
let val = greet("Venky");
console.log(val);