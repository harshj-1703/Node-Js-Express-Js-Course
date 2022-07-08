/*Given 2 int arrays, a and b, each length 3, return 
a new array length 2 containing their middle elements.
*/

function middleWay(a, b){
    return [a[1],b[1]];
}

let a = middleWay([1, 2, 3], [4, 5, 6]);  //→ 2,5
let b = middleWay([7, 7, 7], [3, 8, 0]);  //→ 7,8
let c = middleWay([5, 2, 9], [1, 4, 5]);  //→ 2,4

console.log(a);
console.log(b);
console.log(c);