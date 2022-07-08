/*
Return the sum of the numbers in the array, returning 0 
for an empty array. Except the number 13 is very unlucky, so it does 
not count and numbers that come immediately after a 13 also do not count.
*/

function sum13(nums){
    sum = 0;
    for (i = 0; i < nums.length; i++) {
        if(nums[i] != 13) {
            sum += nums[i];
        if(i>0 && nums[i-1] == 13)
            sum -= nums[i];
        }
    }
    return sum;
}

let a = sum13([1, 2, 2, 1]); //→ 6
let b = sum13([1, 1]); //→ 2
let c = sum13([1, 2, 2, 1, 13]); //→ 6
let d = sum13([1, 2, 13, 2, 1, 13]); //→ 4	
let e = sum13([13, 1, 2, 13, 2, 1, 13]); //→ 3

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);