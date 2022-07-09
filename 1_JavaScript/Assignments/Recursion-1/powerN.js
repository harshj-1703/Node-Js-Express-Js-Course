/*
Given base and n that are both 1 or more, compute recursively 
(no loops) the value of base to the n power, so powerN(3, 2) is 9 (3 squared).
*/

function powerN(base, n){
    if(n == 1 || n == 0)
    {
        return base;
    }
    else
    {
        return (base)*(powerN(base,n-1));
    }
}

let a = powerN(3, 1);  //→ 3
let b = powerN(3, 2);  //→ 9
let c = powerN(3, 3);  //→ 27

console.log(a);
console.log(b);
console.log(c);