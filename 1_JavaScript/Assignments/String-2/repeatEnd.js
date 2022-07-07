/*
Given a string and an int n, return a string made of n repetitions 
of the last n characters of the string. You may assume that n is 
between 0 and the length of the string, inclusive.
*/

function repeatEnd(str, n){
    let str1 ='';
    for(i=0;i<n;i++)
    {
        str1 += str.slice(str.length-n,str.length);
    }
    return str1;
}

let a = repeatEnd('Hello', 3);
let b = repeatEnd('Hello', 2);
let c = repeatEnd('Hello', 1);

console.log(a);
console.log(b);
console.log(c);