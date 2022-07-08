/*
Given an array of ints, return true if the array contains a 2 next to a 2 somewhere.
*/

function has22(nums){
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == 2 && nums[i+1] == 2)
        {
            return true;
        }
    }
    return false;
}

let a = has22([1, 2, 2]); //→ true
let b = has22([1, 2, 1, 2]); //→ false
let c = has22([2, 1, 2]); //→ false

console.log(a);
console.log(b);
console.log(c);