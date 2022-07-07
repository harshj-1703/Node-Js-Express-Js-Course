/*
Given an int n, return the string form of the number 
followed by "!". So the int 6 yields "6!". Except if the 
number is divisible by 3 use "Fizz" instead of the number, 
and if the number is divisible by 5 use "Buzz", and if d
ivisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" 
operator computes the remainder after division, so 23 % 10 
yields 3. What will the remainder be when one number divides evenly into another?
*/

function fizzString2(n){
    let fizz = n % 3 == 0;
    let buzz = n % 5 == 0;
 
    if(fizz && buzz)
    {
        return "FizzBuzz!";
    }   
    if(fizz)
    {
        return "Fizz!";
    }
    if(buzz) 
    {
        return "Buzz!";
    }
    return n + "!";
}

let a = fizzString2(1);  //→ 1!
let b = fizzString2(2);  //→ 2!
let c = fizzString2(3);  //→ Fizz!

console.log(a);
console.log(b);
console.log(c);