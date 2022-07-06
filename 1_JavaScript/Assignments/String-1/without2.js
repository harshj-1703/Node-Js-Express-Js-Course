/*
Given a string, if a length 2 substring appears 
at both its beginning and end, return a string 
without the substring at the beginning, so 
"HelloHe" yields "lloHe". The substring may 
overlap with itself, so "Hi" yields "". 
Otherwise, return the original string unchanged.
*/

function without2(str){
    if(str.length > 1 && str.slice(0,2)==str.slice(str.length-2,str.length))
    {
        return str.slice(2,str.length);
    }
    else
    {
        return str;
    }
}

let a = without2('HelloHe');
let b = without2('HelloHi');
let c = without2('Hi');

console.log(a);
console.log(b);
console.log(c);