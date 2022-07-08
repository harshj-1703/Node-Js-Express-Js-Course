/*
Given an array of ints, return true if the array 
contains a 2 next to a 2 or a 4 next to a 4, but not both.
*/

function either24(nums){
    two = 0;
    four = 0;
    for(i =0;i<nums.length-1;i++)
    {
        if(nums[i] == 2 && nums[i+1] == 2)
        {
            two++;
        }
        if (nums[i] == 4 && nums[i+1] == 4)
        {
            four++;
        }
    }
    if (two!=0 && four!=0)
    {
        return false;
    }
    else if (two!=0 || four!=0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = either24([1, 2, 2]); //→ true
let b = either24([4, 4, 1]); //→ true
let c = either24([4, 4, 1, 2, 2]); //→ false

console.log(a);
console.log(b);
console.log(c);