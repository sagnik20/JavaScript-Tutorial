const name  = "Sagnik";
const greeting = "Good Morning!";
console.log(greeting + " " + name);

let html;
html = "<H1> this is heading </H1> "+
"<P> this  is para </P> ";
// console.log(html);

html = html.concat('THIS',' string2');
// console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html);
console.log(html[1]);
console.log(html);
console.log(html.indexOf('P'));//returns first index
console.log(html.lastIndexOf("P"));//returns last index

console.log(html.charAt(1));//H
console.log(html.endsWith("string2"));//returns boolean if strings ends with those characters

console.log(html.includes("H1"));//returns boolean if string contains those characters

console.log(html.substring(1,6));//=start  <end
console.log(html.slice(1,6));//similar to substring
console.log(html.split(" "));//splits the string at every " " to form an array
console.log(html.replace("this","hi"));//replace the first occourance 
console.log(html.replaceAll("this","hi"));//replace all occourance 

let fruit1 = 'Orange\"';
let fruit2 = 'Apple';
let myhtml = `Hello ${name}
            <h1> This is "my" Heading</h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myhtml