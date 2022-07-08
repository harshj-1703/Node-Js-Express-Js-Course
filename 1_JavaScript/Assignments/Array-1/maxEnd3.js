/*
Given an array of ints length 3, figure out which is larger, the first 
or last element in the array, and set all the other elements to be 
that value. Return the changed array.
*/

function maxEnd3(nums){
    if(nums[0] > nums[2])
    {
        temp = nums[0];
        for(i=0;i<3;i++)
        {
            nums[i] = temp;
        }
        return nums;
    }
    else
    {
        temp = nums[2];
        for(i=0;i<3;i++)
        {
            nums[i] = temp;
        }
        return nums;
    }
}

let a = maxEnd3([1, 2, 3]);   //→ 3,3,3
let b = maxEnd3([11, 5, 9]);  //→ 11,11,11
let c = maxEnd3([2, 11, 3]);  //→ 3,3,3

console.log(a);
console.log(b);
console.log(c);