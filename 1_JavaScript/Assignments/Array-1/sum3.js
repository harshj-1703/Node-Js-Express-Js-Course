//Given an array of ints length 3, return the sum of all the elements.

function sum3(nums){
    let sum = 0;
    for(i=0;i<nums.length;i++)
    {
        sum += nums[i];
    }
    return sum;
}

let a = sum3([1, 2, 3]); //→ 6
let b = sum3([5, 11, 2]); //→ 18
let c = sum3([7, 0, 0]); //→ 7

console.log(a);
console.log(b);
console.log(c);