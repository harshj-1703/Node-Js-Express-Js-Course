/*
Given a non-negative int n, return the sum of its digits recursively 
(no loops). Note that mod (%) by 10 yields the rightmost digit 
(126 % 10 is 6), while flooring division (Math.floor(n/10)) by 10 
removes the rightmost digit [Math.floor(126 / 10) is 12].
*/

function sumDigits1(n){
    sum = 0;
    if(n < 10)
    {
        sum += n;
    }
    else
    {
        sum = (n%10)+sumDigits1(Math.floor(n/10));
    }
    return sum;
}

let a = sumDigits1(126);  //→ 9
let b = sumDigits1(49);  //→ 13
let c = sumDigits1(12);  //→ 3

console.log(a);
console.log(b);
console.log(c);