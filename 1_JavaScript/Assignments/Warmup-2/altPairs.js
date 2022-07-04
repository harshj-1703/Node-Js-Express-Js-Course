/*
Given a string, return a string made of the chars at 
indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".
*/

function altPairs(str){
    let str1 = '';
    for(i=0;i<str.length;i+=4)
    {
        let end = i + 2;
        if (end > str.length)
        {
            end = str.length;
        }
        str1 = str1 + str.substring(i, end);
    }
    return str1;
}

let a = altPairs('kitten');
let b = altPairs('Chocolate');
let c = altPairs('CodingHorror');

console.log(a);
console.log(b);
console.log(c);