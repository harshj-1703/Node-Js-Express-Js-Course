/*
Return a version of the given array where all the 10's have 
been removed. The remaining elements should shift left towards 
the start of the array as needed, and the empty spaces a the end 
of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. 
You may modify and return the given array or make a new array.
*/

function withoutTen(nums){
    arr = [];
    count10 = 0;
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] == 10)
        {
            count10++;
        }
        else
        {
            arr.push(nums[i]);
        }
    }
    for(i=0;i<count10;i++)
    {
        arr.push(0);
    }
    return arr;
}

let a = withoutTen([1, 10, 10, 2]); //→ 1,2,0,0
let b = withoutTen([10, 2, 10]); //→ 2,0,0
let c = withoutTen([1, 99, 10]); //→ 1,99,0

console.log(a);
console.log(b);
console.log(c);