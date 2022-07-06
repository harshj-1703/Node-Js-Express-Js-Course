/*
Given a string, return a new string made of 3 copies 
of the first 2 chars of the original string. The 
string may be any length. If there are fewer than 
2 chars, use whatever is there.
*/

function extraFront(str){
    return str.slice(0,2)+str.slice(0,2)+str.slice(0,2);
}

let a = extraFront('Hello');
let b = extraFront('ab');
let c = extraFront('H');

console.log(a);
console.log(b);
console.log(c);