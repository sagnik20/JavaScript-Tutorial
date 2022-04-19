console.log("Understanding Dom and Creating websites");

let a = document;//returns the document object
console.log(a);

a=document.all;// returns all elements of document
console.log(a);

Array.from(a).forEach(function(element){ // prints all the elements of the document
    console.log(element);
});

a= document.forms;// returns all forms present in website
console.log(a);

a= document.links;
console.log(a);