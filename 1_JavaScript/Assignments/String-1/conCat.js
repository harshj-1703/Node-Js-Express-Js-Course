/*
Given two strings, append them together (known as "concatenation") 
and return the result. However, if the concatenation creates a 
double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".
*/

function conCat(a, b){
    if(a[a.length-1] == b[0])
    {
        return a.slice(0,a.length-1)+b;
    }
    else
    {
        return a+b;
    }
}

let a = conCat('abc', 'cat');
let b = conCat('dog', 'cat');
let c = conCat('abc', '');

console.log(a);
console.log(b);
console.log(c);