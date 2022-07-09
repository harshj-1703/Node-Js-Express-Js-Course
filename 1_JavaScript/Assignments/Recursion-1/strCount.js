/*
Given a string and a non-empty substring sub, compute recursively 
the number of times that sub appears in the string, without the sub strings overlapping.
*/

function strCount(str, sub){
    if(str.length < sub.length)
    {
        return 0;
    }
    if(str.substring(0,sub.length) == sub)
    {
        return 1+strCount(str.substring(sub.length),sub);
    }
    return strCount(str.substring(1),sub);
}

let a = strCount('catcowcat', 'cat');  //→ 2
let b = strCount('catcowcat', 'cow');  //→ 1
let c = strCount('catcowcat', 'dog');  //→ 0

console.log(a);
console.log(b);
console.log(c);