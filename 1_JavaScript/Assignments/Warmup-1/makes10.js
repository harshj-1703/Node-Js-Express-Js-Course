/*
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
*/

function makes10(a, b){
    return (a==10 || b==10 || (a+b)==10)?true:false;
}

let a = makes10(9, 10);
let b = makes10(9, 10);
let c = makes10(9, 10);
let d = makes10(9, 10);

console.log(a);
console.log(b);
console.log(c);
console.log(d);