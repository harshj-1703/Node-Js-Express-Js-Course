/*
Given an int array, return true if the array contains 
2 twice, or 3 twice. The array will be length 0, 1, or 2.
*/

function double23(nums){
    count2 = 0;
    count3 = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == 2)
        {
            count2++;
        }
        if(nums[i] == 3)
        {
            count3++;
        }
    }
    if(count2 == 2 || count3 == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = double23([2, 2]);  //→ true
let b = double23([3, 3]);  //→ true
let c = double23([2, 3]);  //→ false

console.log(a);
console.log(b);
console.log(c);