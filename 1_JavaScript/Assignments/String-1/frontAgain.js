/*
Given a string, return true if the first 2 
chars in the string also appear at the end 
of the string, such as with "edited".
*/

function frontAgain(str){
    if(str.length > 2 && str[0]==str[str.length-2] && str[1]==str[str.length-1])
    {
        return true;
    }
    else if(str.length < 3 && str.length > 1)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a =frontAgain('edited');
let b =frontAgain('edit');
let c =frontAgain('ed');

console.log(a);
console.log(b);
console.log(c);