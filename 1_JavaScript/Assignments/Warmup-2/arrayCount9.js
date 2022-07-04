//Given an array of ints, return the number of 9's in the array.

function arrayCount9(nums){
    let count = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == 9)
        {
            count++;
        }
    }
    return count;
}

let a = arrayCount9([1,2,9]);
let b = arrayCount9([1,9,9]);
let c = arrayCount9([1,9,9,3,9]);

console.log(a);
console.log(b);
console.log(c);