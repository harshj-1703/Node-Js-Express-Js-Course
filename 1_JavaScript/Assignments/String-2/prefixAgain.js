/*
Given a string, consider the prefix string made of the first N 
chars of the string. Does that prefix string appear somewhere else 
in the string? Assume that the string is not empty and that N is in the range 1..str.length().
*/

function prefixAgain(str, n){
    let str1 = str.slice(0,n);
    let str2 = str.slice(n,str.length);
    if(str2.includes(str1))
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = prefixAgain('abXYabc', 1);
let b = prefixAgain('abXYabc', 2);
let c = prefixAgain('abXYabc', 3);

console.log(a);
console.log(b);
console.log(c);