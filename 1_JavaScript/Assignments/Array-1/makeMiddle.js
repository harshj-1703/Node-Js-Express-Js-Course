/*
Given an array of ints of even length, return a new array 
length 2 containing the middle two elements from the original 
array. The original array will be length 2 or more.
*/

function makeMiddle(nums){
    arr = [];
    arr.push(nums[(nums.length/2)-1]);
    arr.push(nums[nums.length/2]);
    return arr;
}

let a = makeMiddle([1, 2, 3, 4]);  //→ 2,3
let b = makeMiddle([7, 1, 2, 3, 4, 9]); //→ 2,3
let c = makeMiddle([1, 2]); //→ 1,2

console.log(a);
console.log(b);
console.log(c);