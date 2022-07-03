/*
Given two int values, return their sum. Unless the two values are the same, then return double their sum.
*/

function sumDouble(a, b){
    return a==b?(a+b)*2:a+b;
}

let a = sumDouble(1, 2);
let b = sumDouble(2, 2);

console.log(a);
console.log(b);