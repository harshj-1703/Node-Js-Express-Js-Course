/*
Given an array of ints, return true if the array contains two 7's 
next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}. 
*/

function has77(nums){
    for(i = 0; i < nums.length - 1; i++) {
        if(nums[i] == 7 && nums[i+1] == 7)
            return true;
                  
        if(i <= nums.length - 3 && nums[i] == 7 && nums[i+2] == 7)
            return true;
    }                      
    return false;
}

let a = has77([1, 7, 7]); //→ true
let b = has77([1, 7, 1, 7]); //→ true
let c = has77([1, 7, 1, 1, 7]); //→ false

console.log(a);
console.log(b);
console.log(c);