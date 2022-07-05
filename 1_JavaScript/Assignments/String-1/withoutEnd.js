/*
Given a string, return a version without the first and 
last char, so "Hello" yields "ell". The string length 
will be at least 2.
*/

function withoutEnd(str){
    return str.slice(1,str.length-1);
}

let a = withoutEnd('Hello');
let b = withoutEnd('java');
let c = withoutEnd('coding');

console.log(a);
console.log(b);
console.log(c);