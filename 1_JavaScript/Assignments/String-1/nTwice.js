/*
Given a string and an int n, return a string 
made of the first and last n chars from the string. 
The string length will be at least n.
*/

function nTwice(str, n){
    return str.slice(0,n)+
            str.slice(str.length-n,str.length);
}

let a = nTwice('hello', 2);
let b = nTwice('Chocolate', 3);
let c = nTwice('Chocolate', 1);

console.log(a);
console.log(b);
console.log(c);