/*
Given an array of ints, return the number of times 
that two 6's are next to each other in the array. 
Also count instances where the second "6" is actually a 7.
*/

function array667(nums){
    let count= 0;
    for(i=0;i<nums.length;i++)
    {
        if((nums[i] == 6) && (nums[i+1] == 6 || nums[i+1] == 7))
        {
            count++;
        }
    }
    return count;
}

let a = array667([6,6,2]);
let b = array667([6,6,2,6]);
let c = array667([6,7,2,6]);

console.log(a);
console.log(b);
console.log(c);