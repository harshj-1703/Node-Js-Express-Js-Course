/*
Given two strings, word and a separator sep, return a big string 
made of count occurrences of the word, separated by the separator string.
*/

function repeatSeparator(word, sep, count){
    let str1 = '';
    for(i=0;i<count;i++)
    {
        if(i==count-1)
        {
            str1 += word;
        }
        else
        {
            str1 += word+sep;
        }
    }
    return str1;
}

let a = repeatSeparator('Word', 'X', 3);
let b = repeatSeparator('This', 'And', 2);
let c = repeatSeparator('This', 'And', 1);

console.log(a);
console.log(b);
console.log(c);