/*
Given an array of ints, return true if it contains no 1's or it contains no 4's.
*/

function no14(nums){
    if(nums.includes(1) && nums.includes(4))
    {
        return false;
    }
    else if(nums.includes(1) || nums.includes(4))
    {
        return true;
    }
    else
    {
        return true;
    }
}

let a = no14([1, 2, 3]); //→ true
let b = no14([1, 2, 3, 4]); //→ false
let c = no14([2, 3, 4]); //→ true

console.log(a);
console.log(b);
console.log(c);