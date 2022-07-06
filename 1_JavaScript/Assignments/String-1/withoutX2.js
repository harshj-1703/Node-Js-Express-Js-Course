/*
Given a string, if one or both of the first 2 chars 
is 'x', return the string without those 'x' chars, 
and otherwise return the string unchanged. 
This is a little harder than it looks.
*/

function withoutX2(str){
    let str1 = '';
    if(str[0] == 'x' && str[1] != 'x')
    {
        return str.slice(1,str.length);
    }
    else if(str[0] == 'x' && str[1] == 'x')
    {
        return str.slice(2,str.length);
    }
    else if(str[0] != 'x' && str[1] != 'x')
    {
        return str;
    }
    for(i=0;i<str.length;i++)
    {
        if(str[i] != 'x')
        {
            str1 += str[i];
        }
    }
    return str1;
}

let a = withoutX2('xHi');
let b = withoutX2('Hxi');
let c = withoutX2('Hi');

console.log(a);
console.log(b);
console.log(c);