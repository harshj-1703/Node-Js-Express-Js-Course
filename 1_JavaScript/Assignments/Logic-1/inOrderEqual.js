/*
Given three ints, a b c, return true if they are in strict increasing order,
such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception 
that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.
*/

function inOrderEqual(a, b, c, equalOk){
    if(b>a && c>b)
    {
        return true;
    }
    else if(equalOk == true && ((a==b && b==c)||(a==b && c>b)||(b>a && b==c)))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = inOrderEqual(2, 5, 11, false); //→ true
let b = inOrderEqual(5, 7, 6, false);  //→ false
let c = inOrderEqual(5, 5, 7, true);   //→ true

console.log(a);
console.log(b);
console.log(c);