/*
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. 
Given 2 int values, return true if one or the other is teen, but not both.
*/

function loneTeen(a, b){
    return (((13<=a && a<=19) && (b<13 || b>19)) || 
    ((13<=b && b<=19) && (a<13 || a>19)))?true:false;
}

let a = loneTeen(13, 99);
let b = loneTeen(21, 19);
let c = loneTeen(13, 13);

console.log(a);
console.log(b);
console.log(c);