//Given an array of ints, return true if every element is a 1 or a 4.

function only14(nums){
    if(nums.includes(0))
    {
        return false;
    }
    for(i=2;i<4;i++)
    {
        if(nums.includes(i))
        {
            return false;
        }
    }
    for(i=5;i<10;i++)
    {
        if(nums.includes(i))
        {
            return false;
        }
    }
    return true;
}

let a = only14([1, 4, 1, 4]); //→ true
let b = only14([1, 4, 2, 4]); //→ false
let c = only14([1, 1]); //→ true

console.log(a);
console.log(b);
console.log(c);