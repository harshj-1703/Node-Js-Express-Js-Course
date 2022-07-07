/*
Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, 
with the exception that if "bOk" is true, b does not need to be greater than a.
*/

function inOrder(a, b, c, bOk){
    if(b>a && c>b)
    {
        return true;
    }
    else if(c>b && bOk==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = inOrder(1, 2, 4, false); //→ true
let b = inOrder(1, 2, 1, false); //→ false
let c = inOrder(1, 1, 2, true);  //→ true

console.log(a);
console.log(b);
console.log(c);