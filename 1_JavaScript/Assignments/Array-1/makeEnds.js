/*Given 2 int arrays, a and b, each length 3, return 
a new array length 2 containing their middle elements.
*/

function makeEnds(nums){
    return [nums[0],nums[nums.length-1]];
}

let a = makeEnds([1, 2, 3]);    //→ 1,3
let b = makeEnds([1, 2, 3, 4]); //→ 1,4
let c = makeEnds([7, 4, 6, 2]); //→ 7,2

console.log(a);
console.log(b);
console.log(c);