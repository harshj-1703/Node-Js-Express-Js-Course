/*
Given a string, compute recursively (no loops) a new string 
where all appearances of "pi" have been replaced by "3.14".
*/

function changePi(str){
    if(str.length == 0)
    {
        return str;
    }
    if(str[0] == 'p' && str[1] == 'i')
    {
        return 3.14+changePi(str.substring(2,str.length));
    }
    return str[0]+changePi(str.substring(1));
}

let a = changePi('xpix');  //→ x3.14x
let b = changePi('pipi');  //→ 3.143.14
let c = changePi('pip');  //→ 3.14p

console.log(a);
console.log(b);
console.log(c);