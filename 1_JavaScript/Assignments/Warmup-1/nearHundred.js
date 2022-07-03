/*
Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number. 
*/

function nearHundred(n){
    if(Math.abs(n-100) <= 10 || Math.abs(n-200) <= 10)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = nearHundred(93);
let b = nearHundred(90);
let c = nearHundred(89);
let d = nearHundred(110);
let e = nearHundred(199);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);