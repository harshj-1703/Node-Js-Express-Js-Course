/*
Given 2 strings, return their concatenation, except 
omit the first char of each. The strings will be at least length 1.
*/

function nonStart(a, b){
    return a.slice(1,a.length)+b.slice(1,b.length);
}

let a = nonStart('Hello', 'There');
let b = nonStart('java', 'code');
let c = nonStart('shotl', 'java');

console.log(a);
console.log(b);
console.log(c);