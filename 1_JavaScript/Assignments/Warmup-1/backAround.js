/*
Given a string, take the last char and return a new 
string with the last char added at the front and back, 
so 'cat' yields 'tcatt' The original string will be length 1 or more.
*/

function backAround(str){
    return str.slice(str.length-1,str.length)+str
    +str.slice(str.length-1,str.length);
}

let a = backAround('cat');
let b = backAround('hello');
let c = backAround('a');

console.log(a);
console.log(b);
console.log(c);