/*
Given 2 positive int values, return the larger value that is 
in the range 10..20 inclusive, or return 0 if neither is in that range.
*/

function max1020(a, b){
    if((a>=10 && a<=20) && (b>=10 && b<=20))
    {
        if(a>b)
        {
            return a;
        }
        else
        {
            return b;
        }
    }
    else if((a>=10 && a<=20) && (b<=10 || b>=20))
    {
        return a;
    }
    else if((a<=10 || a>=20) && (b>=10 && b<=20))
    {
        return b;
    }
    else
    {
        return 0;
    }
}

let a = max1020(11, 19);
let b = max1020(19, 11);
let c = max1020(11, 9);

console.log(a);
console.log(b);
console.log(c);