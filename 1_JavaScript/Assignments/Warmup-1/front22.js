/*
Given a string, take the first 2 chars and return the string with 
the 2 chars added at both the front and back, 
so 'kitten' yields 'kikittenki' chars are there.
*/

function front22(str){
    return str.slice(0,2)+str+str.slice(0,2);
}

let a = front22('kitten');
let b = front22('Ha');
let c = front22('abc');

console.log(a);
console.log(b);
console.log(c);