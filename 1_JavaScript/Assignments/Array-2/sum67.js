/*
Return the sum of the numbers in the array, except ignore 
sections of numbers starting with a 6 and extending to the 
next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.
*/

function sum67(nums){
    sum = 0;
    annul7=0;
    for(i =0 ; i <nums.length;i++)
    {
        if(nums[i] == 6)
        {
        for(j = i; nums[j] != 7;j++)
        {
            nums[j] = 0;
            annul7 = j;
        }
        nums[annul7+1] =0;
    }
    else
    sum += nums[i];
    }
    return sum;
    }

let a = sum67([1, 2, 2]); //→ 5
let b = sum67([1, 2, 2, 6, 99, 99, 7]); //→ 5
let c = sum67([1, 1, 6, 7, 2]); //→ 4

console.log(a);
console.log(b);
console.log(c);