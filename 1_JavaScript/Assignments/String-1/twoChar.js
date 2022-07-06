/*
Given a string and an index, return a string length 2 
starting at the given index. If the index is too big 
or too small to define a string length 2, use the first
2 chars. The string length will be at least 2.
*/

function twoChar(str, index){
    return (index+2>str.length)||index<0?
            str.slice(0,2):str.slice(index,index+2);
}

let a = twoChar('java', 0);
let b = twoChar('java', 2);
let c = twoChar('java', 3);

console.log(a);
console.log(b);
console.log(c);