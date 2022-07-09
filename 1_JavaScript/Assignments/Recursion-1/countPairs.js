/*
We'll say that a "pair" in a string is two instances of a char 
separated by a char. So "AxA" the A's make a pair. Pair's can 
overlap, so "AxAxA" contains 3 pairs -- 2 for A and 1 for x. 
Recursively compute the number of pairs in the given string.
*/

function countPairs(str){
    if(str.length < 3)
    {
        return 0;
    }
    if(str[0] == str[2])
    {
        return 1+countPairs(str.substring(1));
    }
    return countPairs(str.substring(1));
}

let a = countPairs('axa');  //→ 1
let b = countPairs('axax');  //→ 2
let c = countPairs('axbx');  //→ 1

console.log(a);
console.log(b);
console.log(c);