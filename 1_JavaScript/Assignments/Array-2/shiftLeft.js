/*
Return an array that is "left shifted" by one -- so {6, 2, 5, 3} 
returns {2, 5, 3, 6}. You may modify and return the given array,
or return a new array.
*/

function shiftLeft(nums){
    if(nums.length < 2)
    {
        return nums;
    }
    arr = [];
    // arr.push(nums[nums.length-1]);
    for(i=1;i<nums.length;i++)
    {
        arr.push(nums[i]);
    }
    arr.push(nums[0]);
    return arr;
}

let a = shiftLeft([6, 2, 5, 3]); //→ 2,5,3,6
let b = shiftLeft([1, 2]); //→ 2,1
let c = shiftLeft([1]); //→ 1

console.log(a);
console.log(b);
console.log(c);