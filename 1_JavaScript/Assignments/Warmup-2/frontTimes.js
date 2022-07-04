/*
Given a string and a non-negative int n, 
we'll say that the front of the string is the 
first 3 chars, or whatever is there if the 
string is less than length 3. Return n 
copies of the front.
*/

function frontTimes(str, n){
    str = str.slice(0,3);
    let str1 = '';
    for(i=0;i<n;i++)
    {
        str1 += str;
    }
    return str1;  
}

let a = frontTimes('Chocolate', 2);
let b = frontTimes('Chocolate', 3);
let c = frontTimes('Abc', 3);

console.log(a);
console.log(b);
console.log(c);