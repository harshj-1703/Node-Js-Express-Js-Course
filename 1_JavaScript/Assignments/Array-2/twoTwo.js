/*
Given an array of ints, return true if every 2 
that appears in the array is next to another 2.
*/

function twoTwo(nums){
    if(nums.length == 1 && nums[0] == 2)
        return false;
          
    if(nums.length >= 2 && ((nums[0] == 2 && nums[1] != 2) ||
        (nums[nums.length-1] == 2 && nums[nums.length-2] != 2)))
        return false;
                            
    for(i = 1; i <= nums.length - 2; i++) {
        if(nums[i] == 2 && nums[i-1] != 2 && nums[i+1] != 2)
            return false;
    }
                                            
    return true;
}

let a = twoTwo([4, 2, 2, 3]); //→ true
let b = twoTwo([2, 2, 4]); //→ true
let c = twoTwo([2, 2, 4, 2]); //→ false

console.log(a);
console.log(b);
console.log(c);