/*
Return true if the given non-negative number is a 
multiple of 3 or 5, but not both. Use the % "mod" operator.
*/

function old35(n){
    if(n%3==0 && n%5==0)
    {
        return false;
    }
    if(n%3==0 || n%5==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = old35(3); //→ true
let b = old35(10); // → true
let c = old35(15); // → false

console.log(a);
console.log(b);
console.log(c);