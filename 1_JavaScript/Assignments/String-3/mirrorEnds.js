/*
Given a string, look for a mirror image (backwards) string 
at both the beginning and end of the given string. In other 
words, zero or more characters at the very begining of the 
given string, and at the very end of the string in reverse order 
(possibly overlapping). For example, the string "abXYZba" has the mirror end "ab".
*/

function sameEnds(str){
    let len = str.length;
    let temp = '';
    if(len == 5)
    {
        if(str[0] == str[4] && str[1] == str[4])
        {
            return str;
        }
    }
    if(len < 4)
    {
        return str;
    }
    for(i=0;i<Math.round(len/2)-1;i++)
    {
        if(str[i] == str[len-1-i])
        {
            temp += str[i];
        }
        else
        {
            break;
        }
    }
    return temp;
}

let a = sameEnds('abXYZba');
let b = sameEnds('abca');
let c = sameEnds('aba');

console.log(a);
console.log(b);
console.log(c);