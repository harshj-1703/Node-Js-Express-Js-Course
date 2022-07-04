/*
Given two non-negative int values, return true if they 
have the same last digit, such as with 27 and 57. Note 
that the % 'mod' operator computes remainders, so 17 % 10 is 7.
*/

function lastDigit(a, b){
    for(i=0;i<a.toString().length-1;i++)
    {
        a = a % 10;
    }
    for(i=0;i<b.toString().length-1;i++)
    {
        b = b % 10;
    }
    return (a==b)?true:false;
}

let a = lastDigit(7, 17);
let b = lastDigit(6, 17);
let c = lastDigit(3, 113);

console.log(a);
console.log(b);
console.log(c);