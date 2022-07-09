/*
Given n of 1 or more, return the factorial of n, which is n * (n-1) * (n-2) ... 1. Compute the result recursively (without loops).
*/

function factorial(n){
    if(n==1 || n==0)
    {
        return 1;
    }
    else
    {
        return n*factorial(n-1);
    }
}

let a = factorial(1); //→ 1
let b = factorial(2); //→ 2
let c = factorial(3); //→ 6

console.log(a);
console.log(b);
console.log(c);