/*
Given a string, return a version without 
the first 2 chars. Except keep the first 
char if it is 'a' and keep the second char 
if it is 'b'. The string may be any length. 
Harder than it looks.
*/

function deFront(str){
    if(str[0] != 'a' && str[1] != 'b')
    {
        return str.slice(2,str.length);
    }
    else if(str[0] != 'a' && str[1] == 'b' && str.length <= 3)
    {
        return str.slice(1,str.length);
    }
    else if(str[0] == 'a' && str[1] == 'b')
    {
        return str;
    }
    else if(str[0] != 'a' && str[1] == 'b')
    {
        return str[1]+str.slice(3,str.length);
    }
    else if(str[0] == 'a' && str[1] != 'b')
    {
        return str[0]+str.slice(2,str.length);
    }
}

let a = deFront('Hello');
let b = deFront('java');
let c = deFront('away');

console.log(a);
console.log(b);
console.log(c);