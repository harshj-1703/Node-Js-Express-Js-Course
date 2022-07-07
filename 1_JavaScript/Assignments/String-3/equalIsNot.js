/*
Given a string, return true if the number of appearances of "is" 
anywhere in the string is equal to the number of appearances 
of "not" anywhere in the string (case sensitive).
*/

function equalIsNot(str){
    countis = 0;
    countnot = 0;

    for(i=0;i<str.length;i++)
    {
        if(str[i]=='i' && str[i+1]=='s')
        {
            countis++;
        }
        if(str[i]=='n' && str[i+1]=='o' && str[i+2]=='t')
        {
            countnot++;
        }
    }
    if(countis == countnot)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = equalIsNot('This is not'); //→ false
let b = equalIsNot('This is notnot'); //→ true
let c = equalIsNot('noisxxnotyynotxisi'); //→ true

console.log(a);
console.log(b);
console.log(c);