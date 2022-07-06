/*
Given a string, return a version without both 
the first and last char of the string. 
The string may be any length, including 0.
*/

function withoutEnd2(str){
    return str.slice(1,str.length-1);
}

let a = withoutEnd2('Hello'); //→ ell
let b = withoutEnd2('abc'); //→ b
let c = withoutEnd2('ab'); //→

console.log(a);
console.log(b);
console.log(c);