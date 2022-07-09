/*
Given an array of ints, compute recursively if the array 
contains somewhere a value followed in the array by that value 
times 10. We'll use the convention of considering only the part 
of the array that begins at the given index. In this way, a 
recursive call can pass index+1 to move down the array. 
The initial call will pass in index as 0.
*/

function array220(nums, i){
    if(nums.length < i)
    {
        return false;
    }
    x = nums[i];
    if(nums[i]*10 == nums[i+1])
    {
        return true;
    }
    return array220(nums, i+1);
}

let a = array220([1, 2, 20], 0); //→ true
let b = array220([3, 30], 0); //→ true
let c = array220([3], 0); //→ false

console.log(a);
console.log(b);
console.log(c);