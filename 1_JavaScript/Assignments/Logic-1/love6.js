/*
The number 6 is a truly great number. Given two int values, a and b, 
return true if either one is 6. Or if their sum or difference is 6. 
Note: the function Math.abs(num) computes the absolute value of a number.
*/

function love6(a, b){
    let a1 = Math.abs(a - b);
   if (a == 6 || b == 6) return true;
   if (a + b == 6 || a1 == 6) return true;
   else return false;
}

let a = love6(6, 4); //→ true
let b = love6(4, 5); //→ false
let c = love6(1, 5); //→ true

console.log(a);
console.log(b);
console.log(c);