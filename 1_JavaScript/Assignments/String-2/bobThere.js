/*
Return true if the given string contains a "bob" 
string, but where the middle 'o' char can be any char.
*/

function bobThere(str){
    for(i=0;i<str.length;i++)
    {
        if(str[i] == 'b' && str[i+2] =='b')
        {
            return true;
        }
    }
    return false;
}

let a = bobThere('abcbob');
let b = bobThere('b9b');
let c = bobThere('bac');

console.log(a);
console.log(b);
console.log(c);