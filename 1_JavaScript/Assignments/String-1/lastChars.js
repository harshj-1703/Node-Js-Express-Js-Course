/*
Given 2 strings, a and b, return a new string made 
of the first char of a and the last char of b, so "yo" 
and "java" yields "ya". If either string is length 0, 
use '@' for its missing char.
*/

function lastChars(a, b){
    if(a.length > 0 && b.length > 0)
    {
        return a.slice(0,1)+b.slice(b.length-1,b.length);
    }
    else if(a.length > 0 && b.length <= 0)
    {
        return a.slice(0,1)+'@';
    }
    else if(a.length <= 0 && b.length > 0)
    {
        return '@'+b.slice(b.length-1,b.length);
    }
    else
    {
        return '@@';
    }
}

let a = lastChars('last', 'chars');
let b = lastChars('yo', 'java');
let c = lastChars('hi', '');

console.log(a);
console.log(b);
console.log(c);