/*
Return the number of times that the string 
"hi" appears anywhere in the given string.
*/

function countHi(str){
    let count = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] == 'h' && str[i+1] == 'i')
        {
            count++
        }
    }
    return count;
}

let a = countHi('abc hi ho');
let b = countHi('ABChi hi');
let c = countHi('hihi');

console.log(a);
console.log(b);
console.log(c);