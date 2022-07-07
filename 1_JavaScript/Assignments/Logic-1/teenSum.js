/*
Given 2 ints, a and b, return their sum. However, "teen" 
values in the range 13..19 inclusive, are extra lucky. 
So if either value is a teen, just return 19.
*/

function teenSum(a, b){
    if((a >= 13 && a<=19) || (b >= 13 && b <=19))
    {
        return 19;
    }
    else
    {
        return a+b;
    }
}

let a = teenSum(3, 4);   //→ 7
let b = teenSum(10, 13); //→ 19
let c = teenSum(13, 2);  //→ 19

console.log(a);
console.log(b);
console.log(c);