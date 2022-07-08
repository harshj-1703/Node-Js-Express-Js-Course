//Given an int array length 2, return true if it contains a 2 or a 3.

function has23(nums){
    if(nums[0] == 2 || nums[0] == 3
       || nums[1] == 2 || nums[1] == 3)
    {
    return true;
    }
    else
    {
        return false;
    }
}

let a = has23([2, 5]); //→ true
let b = has23([4, 3]); //→ true
let c = has23([4, 5]); //→ false

console.log(a);
console.log(b);
console.log(c);