//Given an array of ints, return true if the number of 1's is greater than the number of 4's

function more14(nums){
    sum1 = 0;
    sum4 = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == 1)
        {
            sum1++;
        }
        if(nums[i] == 4)
        {
            sum4++;
        }
    }
    if(sum1 > sum4)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = more14([1, 4, 1]); //→ true
let b = more14([1, 4, 1, 4]); //→ false
let c = more14([1, 1]); //→ true

console.log(a);
console.log(b);
console.log(c);