/*
Given a string, compute recursively (no loops) the number of 
"11" substrings in the string. The "11" substrings should not overlap.
*/

function count11(str){
    if(str.length < 2)
    {
        return 0;
    }
    if((str[0] == 1 && str[1] == 1 && str[2] == 1 && str[3] == 1))
    {
        return 1+count11(str.substring(1));
    }
    if((str[0] == 1 && str[1] == 1 && str[2] == 1))
    {
        return count11(str.substring(1));
    }
    else if((str[0] == 1 && str[1] == 1))
    {
        return 1+count11(str.substring(1));
    }
    return count11(str.substring(1));
}

let a = count11('11abc11'); //→ 2
let b = count11('abc11x11x11'); //→ 3
let c = count11('111'); //→ 1

console.log(a);
console.log(b);
console.log(c);