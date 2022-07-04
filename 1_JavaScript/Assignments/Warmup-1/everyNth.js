/*
Given a non-empty string and an int N, 
return the string made starting with char 0, 
and then every Nth char of the string. So 
if N is 3, use char 0, 3, 6, ... and so on. 
N is 1 or more.
*/

function everyNth(str, n){
    let str1 = str[0];
    for(i=0;i<parseInt(str.length/2);i++)
    {
        if(str[(i+1)*n] == null)
        {
            break;
        }
        str1 += str[(i+1)*n];
    }
    return str1;
}

let a = everyNth('Miracle', 2);
let b = everyNth('abcdefg', 2);
let c = everyNth('abcdefg', 3);

console.log(a);
console.log(b);
console.log(c);