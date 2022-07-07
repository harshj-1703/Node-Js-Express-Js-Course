/*
We'll say a number is special if it is a multiple of 11 or if 
it is one more than a multiple of 11. Return true if the given 
non-negative number is special. Use the % "mod" operator.
*/

function specialEleven(n){
    if(n%11 == 0 || n%11 == 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = specialEleven(22);  //→ true
let b = specialEleven(23);  //→ true
let c = specialEleven(24);  //→ false

console.log(a);
console.log(b);
console.log(c);