/*
Given a non-empty array of ints, return a new array containing 
the elements from the original array that come before the 
first 4 in the original array. The original array will 
contain at least one 4. Note that it is valid in java 
to create an array of length 0.
*/

function pre4(nums){
    arr = [];
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]==4)
        {
            break;
        }
        arr.push(nums[i]);
    }
    return arr;
}

let a = pre4([1, 2, 4, 1]); //→ 1,2
let b = pre4([3, 1, 4]); //→ 3,1
let c = pre4([1, 4, 4]); //→ 1

console.log(a);
console.log(b);
console.log(c);