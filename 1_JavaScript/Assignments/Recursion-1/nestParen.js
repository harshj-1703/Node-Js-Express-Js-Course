/*
Given a string, return true if it is a nesting of zero or more pairs 
of parenthesis, like "(())" or "((()))". Suggestion: check the first 
and last chars, and then recur on what's inside them.
*/

function nestParen(str){
    if(str.length == 0)
    {
        return true;
    }
    if(str[0] == '(' && str[str.length-1] == ')')
    {
        return nestParen(str.substring(1,str.length-1));
    }
    return false;
}

let a = nestParen('(())'); //→ true
let b = nestParen('((()))'); //→ true
let c = nestParen('(((x))'); //→ false

console.log(a);
console.log(b);
console.log(c);