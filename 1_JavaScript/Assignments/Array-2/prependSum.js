/*
Return a modified version of the input array (nums), where the 
first two items have been removed and one item – the sum of 
those two items - is added to the start of the array.
*/

function prependSum(nums){
    ft = nums[0]+nums[1];
    arr = [];
    arr.push(ft);
    for(i=2;i<nums.length;i++)
    {
        arr.push(nums[i]);
    }
    return arr;
}

let a = prependSum([1, 2, 4, 4]); //→ 3,4,4
let b = prependSum([3, 3, 0]); //→ 6,0
let c = prependSum([1, 1, 1, 1, 1]); //→ 2,1,1,1

console.log(a);
console.log(b);
console.log(c);