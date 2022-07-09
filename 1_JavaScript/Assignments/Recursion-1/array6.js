/*
Given an array of ints, compute recursively if the array 
contains a 6. We'll use the convention of considering only 
the part of the array that begins at the given index. In this way, 
a recursive call can pass index+1 to move down the array. The 
initial call will pass in index as 0.
*/

function array6(nums, i){
    if(nums.length < i)
    {
        return false;
    }
    if(nums[i] == 6)
    {
        return true;
    }
    return array6(nums, i+1);
}

let a = array6([1, 6, 4], 0); //→ true
let b = array6([1, 4], 0); //→ false
let c = array6([6], 0); //→ true

console.log(a);
console.log(b);
console.log(c);