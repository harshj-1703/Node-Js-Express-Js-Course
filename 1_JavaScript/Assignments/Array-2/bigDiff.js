/*
Given an array length 1 or more of ints, return the difference 
between the largest and smallest values in the array. Note: 
the built-in Math.min(v1, v2) and Math.max(v1, v2) methods 
return the smaller or larger of two values.
*/

function bigDiff(nums){
    let small = nums[0];
    let large = nums[0];
    for(i=0;i<nums.length;i++)
    {
        if(small < nums[i])
        {
            small = nums[i];
        }
        if(large > nums[i])
        {
            large = nums[i];
        }
    }
    return Math.abs(large - small);
}

let a = bigDiff([10, 3, 5, 6]);  //→ 7
let b = bigDiff([7, 2, 10, 9]);  //→ 8
let c = bigDiff([2, 10, 7, 2]);  //→ 8

console.log(a);
console.log(b);
console.log(c);