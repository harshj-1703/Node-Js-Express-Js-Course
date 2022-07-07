/*
Given 2 ints, a and b, return their sum. However, sums in 
the range 10..19 inclusive, are forbidden, so in that case just return 20.
*/

function sortaSum(a, b){
    if (a + b >= 10 && a + b <= 19) return 20;
    else return a + b;
}

let a = sortaSum(3, 4); //→ 7
let b = sortaSum(9, 4); //→ 20
let c = sortaSum(10, 11); //→ 21

console.log(a);
console.log(b);
console.log(c);