/*
Given a string, compute recursively a new string where all 
the lowercase 'x' chars have been moved to the end of the string.
*/

function endX(str){
    if(str.length < 1)
    {
		return str;
    }
    if(str[0] == 'x')
    {
        return endX(str.substring(1))+'x';
    }
    return str[0]+endX(str.substring(1));
}

let a = endX('xxre');  //→ rexx
let b = endX('xxhixx');  //→ hixxxx
let c = endX('xhixhix');  //→ hihixxx

console.log(a);
console.log(b);
console.log(c);