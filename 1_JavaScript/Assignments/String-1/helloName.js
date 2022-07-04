/*
Given a string name, e.g. "Bob", 
return a greeting of the form "Hello Bob!".
*/

function helloName(name){
    return 'Hello '+name+'!';
}

let a = helloName('Bob');
let b = helloName('Alice');
let c = helloName('X');

console.log(a);
console.log(b);
console.log(c);