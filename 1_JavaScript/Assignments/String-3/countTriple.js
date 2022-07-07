/*
We'll say that a "triple" in a string is a char appearing 
three times in a row. Return the number of triples in 
the given string. The triples may overlap.
*/

function countTriple(str){
    count = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] == str[i-1] && str[i] == str[i+1])
        {
            count++;
        }
    }
    return count;
}

let a = countTriple('abcXXXabc'); //→ 1
let b = countTriple('xxxabyyyycd'); //→ 3
let c = countTriple('a'); //→ 0

console.log(a);
console.log(b);
console.log(c);