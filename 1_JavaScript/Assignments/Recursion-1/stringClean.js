/*
Given a string, return recursively a "cleaned" string where 
adjacent chars that are the same have been reduced to a 
single char. So "yyzzza" yields "yza".
*/

function stringClean(str){
    if(str.length < 1)
    {
        return str;
    }
    if(str[0] == str[1])
    {
        return stringClean(str.substring(1));
    }
    return str[0] + stringClean(str.substring(1));
}

let a = stringClean('yyzzza');  //→ yza
let b = stringClean('abbbcdd');  //→ abcd
let c = stringClean('Hello');  //→ Helo

console.log(a);
console.log(b);
console.log(c);