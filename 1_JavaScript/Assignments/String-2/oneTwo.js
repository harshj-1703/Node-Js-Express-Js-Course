/*
Given a string, compute a new string by moving the first char 
to come after the next two chars, so "abc" yields "bca". Repeat 
this process for each subsequent group of 3 chars, so "abcdef" 
yields "bcaefd". Ignore any group of fewer than 3 chars at the end.
*/

function oneTwo(str){
    let temp = '';
    for(i=0;i<str.length-2;i=i+3)
    {
        temp = temp + str.slice(i+1,i+3)+str[i];
    }
    return temp;
}

let a = oneTwo('abc');
let b = oneTwo('tca');
let c = oneTwo('tcagdo');

console.log(a);
console.log(b);
console.log(c);