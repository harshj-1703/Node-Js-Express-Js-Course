/*
Return the "centered" average of an array of ints, which we'll say is 
the mean average of the values, except ignoring the largest and smallest 
values in the array. If there are multiple copies of the smallest value, 
ignore just one copy, and likewise for the largest value. Use int division 
to produce the final average. You may assume that the array is length 3 or more.
*/

function centeredAverage(nums){
    small = nums[0];
    large = nums[0];
    arr = [];
    avg = 0;

    for(i=0;i<nums.length;i++)
    {
        if(small < nums[i])
        {
            small = nums[i];
        }
        if(large > nums[i])
        {
            large = nums[i];
        }
    }

    if(small == large)
    {
        return small;
    }
    
    for(i=0;i<nums.length;i++)
    {
        if(nums[i] != small && nums[i] != large)
        {
            arr.push(nums[i]);
        }
        else if(nums[i] == small && nums[i] != large)
        {
            small = '';
        }
        else if(nums[i] == large && nums[i] != small)
        {
            large = '';
        }
    }
    for(i=0;i<arr.length;i++)
    {
        avg += arr[i];
    }
    return avg/arr.length;
}

let a = centeredAverage([1, 2, 3, 4, 100]); //→ 3
let b = centeredAverage([1, 1, 5, 5, 10, 8, 7]); //→ 5.2
let c = centeredAverage([-10, -4, -2, -4, -2, 0]); //→ -3

console.log(a);
console.log(b);
console.log(c);