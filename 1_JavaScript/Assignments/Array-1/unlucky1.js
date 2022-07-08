/*
We'll say that a 1 immediately followed by a 3 in an 
array is an "unlucky" 1. Return true if the given array 
contains an unlucky 1 in the first 2 or last 2 positions in the array.
*/

function unlucky1(nums){
    if((nums[0] == 1 && nums[1] == 3)
        ||(nums[1] == 1 && nums[2] == 3))
    {
        return true;
    }
    else if((nums[nums.length-2] == 1 && nums[nums.length-1] == 3)
        ||(nums[nums.length-3] == 1 && nums[nums.length-2] == 3) && nums[nums.length-1] != 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = unlucky1([1, 3, 4, 5]); //→ true
let b = unlucky1([2, 1, 3, 4, 5]); //→ true
let c = unlucky1([1, 1, 1]); //→ false

console.log(a);
console.log(b);
console.log(c);