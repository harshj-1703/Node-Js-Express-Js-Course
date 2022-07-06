/*
Given a string of any length, return a new 
string where the last 2 chars, if present, 
are swapped, so "coding" yields "codign".
*/

function lastTwo(str){
    if(str.length < 2)
    {
        return str;
    }
    return str.slice(0,str.length-2)+str[str.length-1]+str[str.length-2];
}

let a = lastTwo('coding');
let b = lastTwo('cat');
let c = lastTwo('ab');

console.log(a);
console.log(b);
console.log(c);