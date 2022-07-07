/*
Given a string, return the longest substring that appears 
at both the beginning and end of the string without 
overlapping. For example, sameEnds("abXab") is "ab".
*/

function sameEnds(str){
    let len = str.length;
    let fin = "";
    let tmp = "";

    for (let i = 0; i < len; i++)
    {
        tmp += str[i];
        let tmplen = tmp.length;
        if (i < len / 2 && tmp==str.substring(len-tmplen,len))
        {
            fin = tmp;
        }
    }
    if(str.slice(0,fin.length) == fin)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = sameEnds('abXYab'); //→ true
let b = sameEnds('xx'); //→ true
let c = sameEnds('xxx'); //→ true

console.log(a);
console.log(b);
console.log(c);