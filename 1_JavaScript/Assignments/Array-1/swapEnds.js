/*
Given an array of ints, swap the first and last elements in the array. 
Return the modified array. The array length will be at least 1.
*/

function swapEnds(nums){
    if(nums.length == 1)
    {
        return nums;
    }
    arr =[];
    for(i=1;i<nums.length-1;i++)
    {
        arr.push(nums[i]);
    }
    temp = nums[0];
    nums = [nums[nums.length-1]];
    for(i=0;i<arr.length;i++)
    {
        nums.push(arr[i]);
    }
    nums.push(temp);
    return nums;
}

let a= swapEnds([1, 2, 3, 4]); //→ 4,2,3,1
let b= swapEnds([1, 2, 3]); //→ 3,2,1
let c= swapEnds([8, 6, 7, 9, 5]); //→ 5,6,7,9,8

console.log(a);
console.log(b);
console.log(c);