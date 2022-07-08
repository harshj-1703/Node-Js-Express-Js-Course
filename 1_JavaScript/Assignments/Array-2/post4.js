/*
Given a non-empty array of ints, return a new array containing 
the elements from the original array that come after the last 4 in 
the original array. The original array will contain at least one 4. 
Note that it is valid in java to create an array of length 0.
*/

function post4(nums){
    arr = [];
    for(i=nums.length-1;i>0;i--)
    {
        if(nums[i]==4)
        {
            break;
        }
        arr.push(nums[i]);
    }
    return arr.reverse();
}

let a = post4([2, 4, 1, 2]); //→ 1,2
let b = post4([4, 1, 4, 2]); //→ 2
let c = post4([4, 4, 1, 2, 3]); //→ 1,2,3

console.log(a);
console.log(b);
console.log(c);