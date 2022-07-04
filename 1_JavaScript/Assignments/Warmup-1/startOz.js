/*
Given a string, return a string made of the first 2 chars (if present), 
however include first char only if it is 'o' and include 
the second only if it is 'z', so 'ozymandias' yields 'oz'.
*/

function startOz(str){
    if(str.slice(0,2) === 'oz')
    {
        return 'oz';
    }
    else if(str[0] === 'o' && str[1] != 'z')
    {
        return 'o';
    }
    else if(str[0] != 'o' && str[1] === 'z')
    {
        return 'z';
    }
    else
    {
        return '';
    }
}

let a = startOz('ozymandias');
let b = startOz('bzoo');
let c = startOz('oxx');

console.log(a);
console.log(b);
console.log(c);