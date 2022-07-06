/*
Given 3 int values, a b c, return their sum. However, 
if one of the values is the same as another of the 
values, it does not count towards the sum.
*/

function loneSum(a, b, c){
    if(a==b)
    {
        if(a!=c)
        {
            return c;
        }
        else
        {
            return 0;
        }
    }
    if(b==c)
    {
        if(a!=c)
        {
            return a;
        }
        else
        {
            return 0;
        }
    }
    if(a==c)
    {
        if(b!=c)
        {
            return b;
        }
        else
        {
            return 0;
        }
    }
    else
    {
        return a+b+c;
    }
}

var a = loneSum(1, 2, 3);
var b = loneSum(3, 2, 3);
var c = loneSum(3, 3, 3);

console.log(a);
console.log(b);
console.log(c);