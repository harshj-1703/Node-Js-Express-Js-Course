/*
Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
*/

function diff21(n){
//   return n>21?Math.abs(21-n)*2:21-n;
    return n>21?((n-21)<0?(n-21)*(-1):(n-21))*2:21-n;
}

let a = diff21(21);
let b = diff21(10);
let c = diff21(25);

console.log(a);
console.log(b);
console.log(c);