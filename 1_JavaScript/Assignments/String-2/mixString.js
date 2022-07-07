/*
Given two strings, a and b, create a bigger string made of the first char of a, the first char of b, 
the second char of a, the second char of b, and so on. Any leftover chars go at the end of the result.
*/

function mixString(a, b){
    let str1 ='';
    if(a.length > b.length)
    {
        for(i=0;i<b.length;i++)
        {
            str1 += a[i]+b[i];
        }
        return str1+a.slice(b.length,a.length);
    }
    else if(b.length > a.length)
    {
        for(i=0;i<a.length;i++)
        {
            str1 += a[i]+b[i];
        }
        return str1+b.slice(a.length,b.length);
    }
    else
    {
        for(i=0;i<a.length;i++)
        {
            str1 += a[i]+b[i];
        }
        return str1;
    }
}

let a = mixString('abc', 'xyz');
let b = mixString('Hi', 'There');
let c = mixString('xxxx', 'There');

console.log(a);
console.log(b);
console.log(c);