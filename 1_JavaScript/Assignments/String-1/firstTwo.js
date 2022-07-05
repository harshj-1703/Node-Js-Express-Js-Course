/*
Given a string, return the string made of its
first two chars, so the String "Hello" yields
"He". If the string is shorter than length 2,
return whatever there is, so "X" yields "X", 
and the empty string "" yields the empty string "". 
Note that str.length() returns the length of a string.
*/

function firstTwo(str){
    if(str.length<2)
    {
        return str;
    }
    else
    {
        return str[0]+str[1];
    }
}

let a = firstTwo('Hello');
let b = firstTwo('abcdefg');
let c = firstTwo('ab');

console.log(a);
console.log(b);
console.log(c);