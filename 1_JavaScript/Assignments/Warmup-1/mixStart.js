/*
Return true if the given string begins with 'mix', except the 'm' can be anything, so 'pix', '9ix' .. all count.
*/

function mixStart(str){
    if(str.slice(1,3) === 'ix')
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = mixStart('mix snacks');
let b = mixStart('pix snacks');
let c = mixStart('piz snacks');

console.log(a);
console.log(b);
console.log(c);