/*
Suppose the string "yak" is unlucky. Given a string, 
return a version where all the "yak" are removed, 
but the "a" can be any char. The "yak" s
trings will not overlap.
*/

function stringYak(str)
{
    let str1 = '';
    for(i=0;i<str.length;i++)
    {
        if((i+2)<str.length && str[i]=='y' && str[i+2]=='k')
        {
            i = i + 2;
        }
        else
        {
            str1 += str[i];
        }
    }
    return str1;
}

let a = stringYak('yakpak');
let b = stringYak('pakyak');
let c = stringYak('yak123ya');

console.log(a);
console.log(b);
console.log(c);