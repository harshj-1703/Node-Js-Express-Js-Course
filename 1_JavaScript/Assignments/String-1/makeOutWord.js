/*
Given an "out" string length 4, such as "<<>>",
and a word, return a new string where the word 
is in the middle of the out string, e.g. "<<word>>".
Note: use str.substring(i, j) to extract the 
String starting at index i and going up to but
not including index j.
*/

function makeOutWord(out, word){
    let str1 = '';
    let str2 = '';
    for(i=0;i<out.length/2;i++)
    {
        str1 += out[i];
    }
    for(i=out.length/2;i<out.length;i++)
    {
        str2 += out[i];
    }
    return str1+word+str2;
}

let a = makeOutWord('<<>>', 'Yay');
let b = makeOutWord('<<>>', 'WooHoo');
let c = makeOutWord('[[]]', 'word');

console.log(a);
console.log(b);
console.log(c);