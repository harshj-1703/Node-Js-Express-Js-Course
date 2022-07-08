/*
Given an array of ints, return true if the array contains no 1's and no 3's.
*/

function lucky13(nums){
    if(!nums.includes(1) && !nums.includes(3))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = lucky13([0, 2, 4]); //→ true
let b = lucky13([1, 2, 3]); //→ false
let c = lucky13([1, 2, 4]); //→ false

console.log(a);
console.log(b);
console.log(c);