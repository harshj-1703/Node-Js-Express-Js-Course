/*
Given 2 int values, return true if one is negative and one is positive. 
Except if the parameter "negative" is true, then return true only if both are negative.
*/

function posNeg(a, b, negative){
    if(((a>0 && b<0) || (a<0 && b>0)) && negative==false)
    {
        return true;
    }
    else if((a<0 && b<0) && negative==true)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = posNeg(1, -1, false);
let b = posNeg(-1, 1, false);
let c = posNeg(-4, -5, true);

console.log(a);
console.log(b);
console.log(c);