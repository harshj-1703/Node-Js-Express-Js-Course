/*
Return true if the array contains, somewhere, three increasing 
adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.
*/

function tripleUp(nums){
    for(i=0;i<nums.length;i++)
    {
        val = nums[i];
        if(nums[i] == val && nums[i+1] == val+1 && nums[i+2] == val+2)
        {
            return true;
        }
    }
    return false;
}

let a = tripleUp([1, 4, 5, 6, 2]); //→ true
let b = tripleUp([1, 2, 3]); //→ true
let c = tripleUp([1, 2, 4]); //→ false

console.log(a);
console.log(b);
console.log(c);