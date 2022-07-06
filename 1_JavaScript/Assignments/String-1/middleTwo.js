/*
Given a string of even length, return a string
made of the middle two chars, so the string "string"
yields "ri". The string length will be at least 2.
*/

function middleTwo(str){
    return str.slice(((str.length/2)-1),((str.length/2)+1));
}

let a = middleTwo('string');
let b = middleTwo('code');
let c = middleTwo('Practice');

console.log(a);
console.log(b);
console.log(c);