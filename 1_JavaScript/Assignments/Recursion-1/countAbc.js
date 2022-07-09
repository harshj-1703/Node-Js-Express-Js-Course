/*
Count recursively the total number of "abc" and 
"aba" substrings that appear in the given string.
*/

function countAbc(str){
    if(str.length < 3)
    {
        return 0;
    }
    if((str[0] == 'a' && str[1] == 'b' && str[2] == 'c')
        || (str[0] == 'a' && str[1] == 'b' && str[2] == 'a'))
    {
        return 1+countAbc(str.substring(1));
    }
    return countAbc(str.substring(1));
}

let a = countAbc('abc'); //→ 1
let b = countAbc('abcxxabc'); //→ 2
let c = countAbc('abaxxaba'); //→ 2

console.log(a);
console.log(b);
console.log(c);