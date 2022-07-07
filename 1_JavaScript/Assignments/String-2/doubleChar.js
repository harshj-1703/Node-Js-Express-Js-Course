/*
Given a string, return a string where for every 
char in the original, there are two chars.
*/

function doubleChar(str){
    let str1 = '';
    for(i=0;i<str.length;i++)
    {
        str1 += str[i]+str[i];
    }
    return str1;
}

let a = doubleChar('The');
let b = doubleChar('AAbb');
let c = doubleChar('Hi-There');

console.log(a);
console.log(b);
console.log(c);