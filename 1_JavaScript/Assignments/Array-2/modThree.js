/*
Given an array of ints, return true if the array contains 
either 3 even or 3 odd values all next to each other.
*/

function modThree(nums){
    result = false;
    for (i = 0;i<nums.length-2;i++)
    if( (nums[i] % 2 == 0 && nums[i+1] % 2 == 0 && nums[i+2] % 2 == 0)|| 
        (!(nums[i] % 2 == 0) && !(nums[i+1] % 2 == 0) && !(nums[i+2] % 2 == 0)))
    {
        result = true;
    }
    return result;
}

let a = modThree([2, 1, 3, 5]); //→ true
let b = modThree([2, 1, 2, 5]); //→ false
let c = modThree([2, 4, 2, 5]); //→ true

console.log(a);
console.log(b);
console.log(c);