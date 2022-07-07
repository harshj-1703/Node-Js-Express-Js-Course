/*
Given two strings, return true if either of the strings 
appears at the very end of the other string, ignoring 
upper/lower case differences (in other words, the computation 
should not be "case sensitive"). Note: str.toLowerCase() 
returns the lowercase version of a string.
*/

function endOther(a, b){
    a = a.toLowerCase();
    b = b.toLowerCase();

    if(a.length > b.length)
    {
        if(a.slice(a.length-b.length,a.length) == b)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    else
    {
        if(b.slice(b.length-a.length,b.length) == a)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

let a = endOther('Hiabc', 'abc');
let b = endOther('AbC', 'HiaBc');
let c = endOther('abc', 'abXabc');

console.log(a);
console.log(b);
console.log(c);