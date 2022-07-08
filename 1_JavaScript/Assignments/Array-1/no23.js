//Given an int array length 2, return true if it does not contain a 2 or 3.

function no23(nums){
    if(!nums.includes(2) && !nums.includes(3))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = no23([4, 5]);  //→ true
let b = no23([4, 2]);  //→ false
let c = no23([3, 5]);  //→ false

console.log(a);
console.log(b);
console.log(c);