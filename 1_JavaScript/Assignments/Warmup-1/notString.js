/*
Given a string, return a new string where "not " has been added to the front. However, 
if the string already begins with "not", return the string unchanged.
*/

function notString(str){
    // console.log(str.substr('0','3'));
    return str.substr('0','3')==='not'?str:('not '+str);
}

let a = notString('candy');
let b = notString('x');
let c = notString('not bad');

console.log(a);
console.log(b);
console.log(c);