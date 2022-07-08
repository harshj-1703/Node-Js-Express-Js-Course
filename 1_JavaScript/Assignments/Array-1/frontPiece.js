/*
Given an int array of any length, return a new array 
of its first 2 elements. If the array is smaller than 
length 2, use whatever elements are present.
*/

function frontPiece(nums){
    arr = [];
    if(nums.length < 1)
    {
        return arr;
    }
    if(nums.length < 2)
    {
        arr.push(nums[0]);
        return arr;
    }
    else
    {
        arr.push(nums[0]);
        arr.push(nums[1]);
        return arr;
    }
}

let a = frontPiece([1, 2, 3]); //→ 1,2
let b = frontPiece([1, 2]); //→ 1,2
let c = frontPiece([1]); //→ 1

console.log(a);
console.log(b);
console.log(c);