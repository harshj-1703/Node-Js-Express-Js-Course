/*
Return true if the given string contains an appearance 
of "xyz" where the xyz is not directly preceeded by a 
period (.). So "xxyz" counts but "x.xyz" does not.
*/

function xyzThere(str){
    for(i=0;i<str.length;i++)
    {
        if(str[i] != '.' && str.slice(i+1,i+4) == 'xyz')
        {
            return true;
        }
        else if(str.slice(0,3) == 'xyz')
        {
            return true;
        }
    }
    return false;
}

let a = xyzThere('abcxyz');
let b = xyzThere('abc.xyz');
let c = xyzThere('xyz.abc');

console.log(a);
console.log(b);
console.log(c);