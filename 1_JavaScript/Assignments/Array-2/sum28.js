/*
Given an array of ints, return true if the sum of all the 2's in the array is exactly 8.
*/

function sum28(nums){
    sum = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == 2)
        {
            sum += 2;
        }
    }
    if(sum == 8)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = sum28([2, 3, 2, 2, 4, 2]); //→ true
let b = sum28([2, 3, 2, 2, 4, 2, 2]); //→ false
let c = sum28([1, 2, 3, 4]); //→ false

console.log(a);
console.log(b);
console.log(c);