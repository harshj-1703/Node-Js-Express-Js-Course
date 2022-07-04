/*
Given a string and a non-negative int n, return a 
larger string that is n copies of the original string.
*/

function stringTimes(str, n){
    let str1 = '';
    for(i=0;i<n;i++)
    {
        str1 += str;
    }
    return str1;
}

let a = stringTimes('Hi', 2);
let b = stringTimes('Hi', 3);
let c = stringTimes('Hi', 1);

console.log(a);
console.log(b);
console.log(c);