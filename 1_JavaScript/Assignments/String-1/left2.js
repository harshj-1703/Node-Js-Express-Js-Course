/*
Given a string, return a "rotated left 2" 
version where the first 2 chars are moved 
to the end. The string length will be at least 2.
*/

function left2(str){
    return str.slice(2,str.length)+str.slice(0,2);
}

let a = left2('Hello');
let b = left2('java');
let c = left2('Hi');

console.log(a);
console.log(b);
console.log(c);