console.log("We will learn about Window");

let a  = window;//returns us the window object 
console.log(a);

a=window.alert("Hello World");// shows an alert msg popup from top of page
console.log(a);//prints undefined

a= alert("Hello Sagnik");//even without writing window object, it directly refers to window object and works fine

a = prompt('Type your name:');// similar to alert but takes a input. Also window.prompt() is the same thing
console.log(a);//prints the text you entered 

a = confirm("Are you sure ?");
console.log(a);//prints true/false

a = window.innerHeight;
console.log(a);//prints page height

a = innerHeight;
console.log(a);//prints page height

a=innerWidth;
console.log(a);//prints page width

a=scrollX;//shows how much scroll happened in x direction
a=scrollY;//shows how much scroll happened in y direction

a=location;
console.log(a);

// a=location.href="//www.github.com";// loads given url - not a reload rather just changes the href

a=location.toString();
console.log(a);//prints the current location as string


a=history;
console.log(a);//gives you history of this current tab. Exactly same as back and forward button
//history.go() - changes works as your buttons