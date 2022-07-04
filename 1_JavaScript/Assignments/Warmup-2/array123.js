/*
Given an array of ints, return true if the sequence 
of numbers 1, 2, 3 appears in the array somewhere.
*/

function array123(nums){
    for(i=0;i<nums.length;i++)
    {
        if(nums[i-1]==1 && nums[i]==2 && nums[i+1]==3)
        {
            return true;
        }
    }
    return false;
}

