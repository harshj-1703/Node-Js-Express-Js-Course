/*
Look for patterns like "zip" and "zap" in the string -- length-3, 
starting with 'z' and ending with 'p'. Return a string where for all 
such words, the middle letter is gone, so "zipXzap" yields "zpXzp".
*/

function zipZap(str){
    let temp = '';
    for(i=0;i<str.length;i++)
    {
        if(str[i]=='z' && str[i+2]=='p')
        {
            temp += str[i]+str[i+2];
            i=i+2;
        }
        else
        {
            temp += str[i];
        }
    }
    return temp;
}

let a = zipZap('zipXzap');
let b = zipZap('zopzop');
let c = zipZap('zzzopzop');

console.log(a);
console.log(b);
console.log(c);