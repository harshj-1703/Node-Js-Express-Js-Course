/*
Given a string, return true if the first instance of 
"x" in the string is immediately followed by another "x".
*/

function doubleX(str){
    for(i=0;i<str.length;i++)
    {
        if((str[i]===str[i+1]) && (str[i]==='x'))
        {
            return true;
        }
        else if(str[i] != str[i+1] && str[i]==='x')
        {
            return false;
        }
    }
    return false;
}

let a = doubleX('axxbb');
let b = doubleX('axaxax');
let c = doubleX('xxxxx');

console.log(a);
console.log(b);
console.log(c);