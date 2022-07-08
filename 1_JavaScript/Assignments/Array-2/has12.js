/*
Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.
*/

function has12(nums){
    count1 = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]==1)
        {
            count1++;
        }
        if(nums[i]==2 && count1 > 0)
        {
            return true;
        }
    }
    return false;
}

let a = has12([1, 3, 2]); //→ true
let b = has12([3, 1, 2]); //→ true
let c = has12([3, 1, 4, 5, 2]); //→ true

console.log(a);
console.log(b);
console.log(c);