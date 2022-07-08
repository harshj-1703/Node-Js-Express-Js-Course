/*
Return an array that contains the exact same numbers as 
the given array, but rearranged so that all the even 
numbers come before all the odd numbers. Other than that, 
the numbers can be in any order. You may modify and 
return the given array, or make a new array.
*/

function evenOdd(nums){
    even = [];
    odd = [];
    for(i=0;i<nums.length;i++)
    {
        if(nums[i]%2==0)
        {
            even.push(nums[i]);
        }
        else
        {
            odd.push(nums[i]);
        }
    }
    arr = even.concat(odd);
    return arr;
}

let a = evenOdd([1, 0, 1, 0, 0, 1, 1]); //→ 0,0,0,1,1,1,1
let b = evenOdd([3, 3, 2]); //→ 2,3,3
let c = evenOdd([2, 2, 2]); //→ 2,2,2

console.log(a);
console.log(b);
console.log(c);