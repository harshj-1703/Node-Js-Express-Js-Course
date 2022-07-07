/*
Given a non-negative number "num", return true if num is within 2 of a 
multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.
*/

function nearTen(num){
    if(num%10 == 2 || num%10 == 1 ||
         num%10 == 8 || num%10 == 9 || num%10 == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = nearTen(12);  //→ true
let b = nearTen(17);  //→ false
let c = nearTen(19);  //→ true

console.log(a);
console.log(b);
console.log(c);