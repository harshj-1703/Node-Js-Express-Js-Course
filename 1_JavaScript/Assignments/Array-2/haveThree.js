/*
Given an array of ints, return true if the value 3 appears 
in the array exactly 3 times, and no 3's are next to each other.
*/

function haveThree(nums){
    count3 = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == 3 && nums[i+1] == 3)
        {
            return false;
        }
        else if(nums[i] == 3)
        {
            count3++;
        }
    }
    if(count3 == 3)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = haveThree([3, 1, 3, 1, 3]); //→ true
let b = haveThree([3, 1, 3, 3]); //→ false
let c = haveThree([3, 4, 3, 3, 4]); //→ false

console.log(a);
console.log(b);
console.log(c);