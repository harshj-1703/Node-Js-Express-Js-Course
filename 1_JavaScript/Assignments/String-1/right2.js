/*
Given a string, return a "rotated right 2" version where the 
last 2 chars are moved to the start. The string length will be at least 2.
*/

function right2(str){
    return str.slice(str.length-2,str.length)
            +str.slice(0,str.length-2);
}

let a = right2('Hello');
let b = right2('java');
let c = right2('Hi');

console.log(a);
console.log(b);
console.log(c);