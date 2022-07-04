/*
Given an array of ints, we'll say that a triple is a value 
appearing 3 times in a row in the array. Return true if 
the array does not contain any triples.
*/

function noTriples(nums){
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == nums[i-1] && nums[i] == nums[i+1])
        {
            return false;
        }
    }
    return true;
}

let a = noTriples([1,1,2,2,1]);
let b = noTriples([1,1,2,2,2,1]);
let c = noTriples([1,1,2,2,2,1]);

console.log(a);
console.log(b);
console.log(c);