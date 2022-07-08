/*
We'll say that a value is "everywhere" in an array if 
for every pair of adjacent elements in the array, at 
least one of the pair is that value. Return true if 
the given value is everywhere in the array.
*/

function isEverywhere(nums, val){
    result = true;
    for(i=0;i<=nums.length-2;i++)
    {
        if( nums[i] != val && nums[i+1] != val)
        {
            result = false;
        }
    }
    return result;
}


let a = isEverywhere([1, 2, 1, 3], 1); //→ true
let b = isEverywhere([1, 2, 1, 3], 2); //→ false
let c = isEverywhere([1, 2, 1, 3, 4], 1); //→ false

console.log(a);
console.log(b);
console.log(c);