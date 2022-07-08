/*
Return the number of even ints in the given array. Note: 
the % "mod" operator computes the remainder, e.g. 5 % 2 is 1.
*/

function countEvens(nums){
    count = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]%2==0)
        {
            count++;
        }
    }
    return count;
}

let a = countEvens([2, 1, 2, 3, 4]); //→ 3
let b = countEvens([2, 2, 0]); //→ 3
let c = countEvens([1, 3, 5]); //→ 0

console.log(a);
console.log(b);
console.log(c);