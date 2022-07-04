/*
Given 2 strings, a and b, return the number of 
the positions where they contain the same length 
2 substring. So "xxcaazz" and "xxbaaz" yields 3, 
since the "xx" "xx", "aa", and "az" substrings 
appear in the same place in both strings.
*/

function stringMatch(a, b){
    let count= 0;
    if(a.length < b.length)
    {
        length = a.length;
    }
    else
    {
        length = b.length;
    }
    for(i=0;i<length-1;i++)
    {
        if(a.substring(i,i+2) == b.substring(i,i+2))
        {
            count++;
        }
    }
    return count;
}

let a = stringMatch('xxcaazz', 'xxbaaz');
let b = stringMatch('abc', 'abc');
let c = stringMatch('abc', 'axc');

console.log(a);
console.log(b);
console.log(c);