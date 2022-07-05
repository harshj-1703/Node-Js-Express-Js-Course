/*
Given a string, return a new string made 
of 3 copies of the last 2 chars of the original 
string. The string length will be at least 2.
*/

function extraEnd(str){
    return str.slice(str.length-2,str.length)+
            str.slice(str.length-2,str.length)+
            str.slice(str.length-2,str.length);
}

let a = extraEnd('Hello');
let b = extraEnd('ab');
let c = extraEnd('Hi');

console.log(a);
console.log(b);
console.log(c);