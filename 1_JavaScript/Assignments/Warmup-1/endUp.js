/*
Given a string, return a new string where the 
last 3 chars are now in upper case. If the string 
has less than 3 chars, uppercase whatever is there. 
Note that str.toUpperCase() returns the uppercase 
version of a string.
*/

function endUp(str){
    if(str.length >= 3)
    {
        return str.slice(0,str.length-3)+
                str.toUpperCase().slice(str.length-3,str.length);
    }
    else
    {
        return str.toUpperCase();
    }
}

let a = endUp('Hello');
let b = endUp('hi there');
let c = endUp('hi');

console.log(a);
console.log(b);
console.log(c);