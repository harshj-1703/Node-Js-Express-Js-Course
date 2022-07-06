/*
Given a string, return a string length 
1 from its front, unless front is false, 
in which case return a string length 1 from 
its back. The string will be non-empty.
*/

function theEnd(str, front){
    return (front==true)?str[0]:str[str.length-1];
}

let a = theEnd('Hello', true);
let b = theEnd('Hello', false);
let c = theEnd('oh', true);

console.log(a);
console.log(b);
console.log(c);