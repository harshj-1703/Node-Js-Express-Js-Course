/*
Given an int array, return a new array with double the length 
where its last element is the same as the original array, and all 
the other elements are 0. The original array will be length 1 or more.
*/

function makeLast(nums){
    let temp = [];
    let dl = nums.length * 2;
    for(i=0;i<dl-1;i++)
    {
        temp.push(0);
    }
    temp.push(nums[nums.length-1]);
    return temp;
}

let a = makeLast([4, 5, 6]); //→ 0,0,0,0,0,6
let b = makeLast([1, 2]); //→ 0,0,0,2
let c = makeLast([3]); //→ 0,3

console.log(a);
console.log(b);
console.log(c);