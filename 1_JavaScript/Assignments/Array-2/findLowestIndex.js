/*Return the index of the minimum value in an array. 
The input array will have at least one element in it.
*/

function findLowestIndex(nums){
    arr = nums[0];
    index = 0;
    for(i=0;i<nums.length;i++)
    {
        if(arr > nums[i])
        {
            arr = nums[i];
            index = i;
        }
    }
    return index;
}

let a = findLowestIndex([99, 98, 97, 96, 95]); //→ 4
let b = findLowestIndex([2, 2, 0]); //→ 2
let c = findLowestIndex([1, 3, 5]); //→ 0
let d = findLowestIndex([11, 9, 0, 1]); //→ 2

console.log(a);
console.log(b);
console.log(c);
console.log(d);