/*
Given a string, if the string "del" appears starting at index 1, 
return a string where that "del" has been deleted. Otherwise, return the string unchang
*/

function delDel(str){
    // console.log(str.slice(1,4));
    if(str.slice(1,4) === 'del')
    {
        return str.slice(0,1)+str.slice(4,str.length);
    }
    else
    {
        return str;
    }
}

let a = delDel('adelbc');
let b = delDel('adelHello');
let c = delDel('abcdel');

console.log(a);
console.log(b);
console.log(c);