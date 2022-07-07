/*
Return true if the given non-negative number is 1 or 2 more than a multiple of 20.
*/

function more20(n){
    if(n%20 == 1 || n%20 == 2)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = more20(20); //→ false
let b = more20(21); //→ true
let c = more20(22); //→ true

console.log(a);
console.log(b);
console.log(c);