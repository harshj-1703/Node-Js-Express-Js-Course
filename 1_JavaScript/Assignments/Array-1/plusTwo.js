/*
Given 2 int arrays, each length 2, return a new array length 4 containing all their elements.
*/

function plusTwo(a, b){
    return a.concat(b);
}

let a = plusTwo([1, 2], [3, 4]);  //→ 1,2,3,4
let b = plusTwo([4, 4], [2, 2]);  //→ 4,4,2,2
let c = plusTwo([9, 2], [3, 4]);  //→ 9,2,3,4

console.log(a);
console.log(b);
console.log(c);