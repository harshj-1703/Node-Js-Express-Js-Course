/*
Given a number n, create and return a new array of length n, containing 
the numbers 0, 1, 2, ... n-1. The given n may be 0, in which case just 
return a length 0 array. You do not need a separate if-statement for 
the length-0 case; the for-loop should naturally execute 0 times in 
that case, so it just works. The syntax to make a new array is let myArray = [];
*/

function fizzArray(n){
    nums = [];
    for(i=0;i<n;i++)
    {
        nums.push(i);
    }
    return nums;
}

let a = fizzArray(4); //→ 0,1,2,3
let b = fizzArray(1); //→ 0
let c = fizzArray(10); //→ 0,1,2,3,4,5,6,7,8,9

console.log();
console.log(b);
console.log(c);