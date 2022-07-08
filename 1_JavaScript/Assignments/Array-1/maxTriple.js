/*
Given an array of ints of odd length, look at the first, last, 
and middle values in the array and return the largest. The 
array length will be a least 1.
*/

function maxTriple(nums){
    first = nums[0];
    last = nums[nums.length-1];
    middle = nums[((nums.length+1)/2)-1];

    if(first > last && first > middle)
    {
        return first;
    }
    else if(last > first && last > middle)
    {
        return last;
    }
    else
    {
        return middle;
    }
}

let a = maxTriple([1, 2, 3]);   //→ 3
let b = maxTriple([1, 5, 3]);   //→ 5
let c = maxTriple([5, 2, 3]);   //→ 5

console.log(a);
console.log(b);
console.log(c);