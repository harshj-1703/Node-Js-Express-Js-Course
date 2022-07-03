/*
Given a string, we'll say that the front is the first 3 chars of the string. 
If the string length is less than 3, the front is whatever is there. 
Return a new string which is 3 copies of the front.
*/

function front3(str){
    if(str.length>=3)
    {
        str = str.slice(0,3);
        str += str;
        str += str.slice(0,3);
        return str;
    }
    else
    {
        return str+str+str;
    }
}

let a = front3('java');
let b = front3('Chocolate');
let c = front3('abc');
let d = front3('ab');
let e = front3('a');

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);