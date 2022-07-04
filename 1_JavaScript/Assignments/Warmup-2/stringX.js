/*
Given a string, return a version where all the "x" have been removed. 
Except an "x" at the very start or end should not be removed.
*/

function stringX(str){
    let str1 = '';
    for(i=0;i<str.length;i++)
    {
        if(str[i] != 'x')
        {
            str1 += str[i];
        }
    }
    if(str[0]=='x' && str[str.length-1]=='x')
    {
        return 'x'+str1+'x';
    }
    return str1;
}

let a = stringX('xxHxix');
let b = stringX('abxxxcd');
let c = stringX('xabxxxcdx');

console.log(a);
console.log(b);
console.log(c);