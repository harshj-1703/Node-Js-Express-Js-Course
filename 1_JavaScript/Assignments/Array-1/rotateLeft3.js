//Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

function rotateLeft3(nums){
    temp = '';
    temp = nums[0];
    nums[0] = nums[1];
    nums[1] = nums[2];
    nums[2] = temp;

    return nums;
}

let a = rotateLeft3([1, 2, 3]); //→ 2,3,1
let b = rotateLeft3([5, 11, 9]); //→ 11,9,5
let c = rotateLeft3([7, 0, 0]); //→ 0,0,7

console.log(a);
console.log(b);
console.log(c);