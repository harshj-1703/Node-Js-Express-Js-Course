/*
Given a string, return a new string made of every 
other char starting with the first, so "Hello" yields "Hlo".
*/

function stringBits(str){
    let str1 = '';
    for(i=0;i<str.length;i=i+2)
    {
        str1 += str[i];
    }

    return str1;
}

let a = stringBits('Hello');
let b = stringBits('Hi');
let c = stringBits('Heeololeo');

console.log(a);
console.log(b);
console.log(c);