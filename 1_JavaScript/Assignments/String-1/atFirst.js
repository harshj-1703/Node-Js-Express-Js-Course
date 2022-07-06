/*
Given a string, return a string length 2 made 
of its first 2 chars. If the string length is 
less than 2, use '@' for the missing chars.
*/

function atFirst(str){
    if(str.length >= 2)
    {
        return str.slice(0,2);
    }
    else
    {
        length = 2-str.length;
        for(i=0;i<length;i++)
        {
            str += str+'@';
        }
        return str.slice(1,str.length);
    }
}

let a = atFirst('hello');
let b = atFirst('hi');
let c = atFirst('h');

console.log(a);
console.log(b);
console.log(c);