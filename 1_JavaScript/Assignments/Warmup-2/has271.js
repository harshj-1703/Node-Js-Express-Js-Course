/*
Given an array of ints, return true if it 
contains a 2, 7, 1 pattern -- a value, followed 
by the value plus 5, followed by the value minus 1. 
Additionally the 271 counts even if the "1" differs 
by 2 or less from the correct value.
*/

function has271(nums){
    for(i=0;i<nums.length;i++)
    {
        if(nums[i-1] == 2 && nums[i] == 7 && nums[i+1] == 1)
        {
            return true;
        }
    }
    return false;
}

let a = has271([1,2,7,1]);
let b = has271([1,2,8,1]);
let c = has271([2,7,1]);

console.log(a);
console.log(b);
console.log(c);