/*
Given an array of ints, compute recursively the number of times 
that the value 11 appears in the array. We'll use the convention 
of considering only the part of the array that begins at the given 
index. In this way, a recursive call can pass index+1 to move down 
the array. The initial call will pass in index as 0.
*/

function array11(nums, i){
    if(nums.length < i)
    {
        return 0;
    }
    if(nums[i] == 11)
    {
        return 1+array11(nums, i+1);
    }
    return array11(nums, i+1);
}

let a = array11([1, 2, 11], 0); //→ 1
let b = array11([11, 11], 0); //→ 2
let c = array11([1, 2, 3, 4], 0); //→ 0

console.log(a);
console.log(b);
console.log(c);