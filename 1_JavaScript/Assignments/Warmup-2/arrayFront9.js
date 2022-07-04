/*
Given an array of ints, return true if one of the first 
4 elements in the array is a 9. The array length may be less than 4.
*/

function arrayFront9(nums){
    for(i=0;i<4;i++)
    {
        if(nums[i] == 9)
        {
            return true;
        }
    }
    return false;
}

let a = arrayFront9([1,2,9,3,4]);
let b = arrayFront9([1,2,3,4,9]);
let c = arrayFront9([1,2,3,4,5]);

console.log(a);
console.log(b);
console.log(c);