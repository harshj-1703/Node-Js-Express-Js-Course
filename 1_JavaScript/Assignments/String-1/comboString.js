/*
Given 2 strings, a and b, return a 
string of the form short+long+short, 
with the shorter string on the outside 
and the longer string on the inside. The 
strings will not be the same length, 
but they may be empty (length 0).
*/

function comboString(a, b){
    if(a.length > b.length)
    {
        return b+a+b;
    }
    else
    {
        return a+b+a;
    }
}

let a = comboString('Hello', 'hi');
let b = comboString('Hi', 'Hello');
let c = comboString('aaa', 'b');

console.log(a);
console.log(b);
console.log(c);