/*
Return the number of times that the string "code" appears 
anywhere in the given string, except we'll accept any 
letter for the 'd', so "cope" and "cooe" count.
*/

function countCode(str){
    count = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] == 'c' && str[i+1] == 'o' && str[i+3] == 'e')
        {
            count++;
        }
    }
    return count;
}

let a = countCode('aaacodebbb');
let b = countCode('codexxcode');
let c = countCode('cozexxcope');

console.log(a);
console.log(b);
console.log(c);