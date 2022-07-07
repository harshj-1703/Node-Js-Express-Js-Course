/*
Given a string and a non-empty word string, return a 
string made of each char just before and just after 
every appearance of the word in the string. Ignore 
cases where there is no char before or after the word, 
and a char may be included twice if it is between two words.
*/

function wordEnds(str, word){
    let temp = '';
    for(i=0;i<str.length+1;i++)
    {
        if(i > 0 && str.slice(i,i+word.length) == word)
        {
            temp += str.slice(i-1,i);
        }
        if(i < str.length-word.length && str.slice(i,i+word.length) == word)
        {
            temp += str.slice(i+word.length,i+word.length+1);
        }
    }
    return temp;
}

let a = wordEnds('abcXY123XYijk', 'XY'); //→ c13i
let b = wordEnds('XY123XY', 'XY'); //→ 13
let c = wordEnds('XY1XY', 'XY'); //→ 11

console.log(a);
console.log(b);
console.log(c);