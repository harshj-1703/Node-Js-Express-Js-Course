/*
Given an array of ints of odd length, return a new array 
length 3 containing the elements from the middle of the 
array. The array length will be at least 3.
*/

function midThree(nums){
    arr = [];
    len = nums.length;
    arr.push(nums[((nums.length+1)/2)-2]);
    arr.push(nums[((nums.length+1)/2)-1]);
    arr.push(nums[(nums.length+1)/2]);
    return arr;
}

let a = midThree([1, 2, 3, 4, 5]); //→ 2,3,4
let b = midThree([8, 6, 7, 5, 3, 0, 9]); //→ 7,5,3
let c = midThree([1, 2, 3]); //→ 1,2,3

console.log(a);
console.log(b);
console.log(c);