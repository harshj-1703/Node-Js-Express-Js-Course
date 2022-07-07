/*
Given a string and an int n, return a string made of the first n 
characters of the string, followed by the first n-1 characters of 
the string, and so on. You may assume that n is between 0 and the 
length of the string, inclusive (i.e. n >= 0 and n <= str.length()).
*/

function repeatFront(str, n){
    let str1 = '';
    for(i=0;i<n;i++)
    {
        str1 += str.slice(0,n-i);
    }
    return str1;
}

let a = repeatFront('Chocolate', 4);
let b = repeatFront('Chocolate', 3);
let c = repeatFront('Ice Cream', 2);

console.log(a);
console.log(b);
console.log(c);