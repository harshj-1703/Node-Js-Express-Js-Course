/*
Given 3 int values, a b c, return their sum. 
However, if one of the values is 13 then 
it does not count towards the sum and values 
to its right do not count. So for example, 
if b is 13, then both b and c do not count.
*/

function luckySum(a, b, c){
    if(a!=13 && b!=13 && c!=13)
    {
        return a+b+c;
    }
    else if(a!=13 && b!=13 && c==13)
    {
        return a+b;
    }
    else if(a==13)
    {
        return 0;
    }
    else
    {
        return a;
    }
}

let a = luckySum(1, 2, 3);
let b = luckySum(1, 2, 13);
let c = luckySum(1, 13, 3);

console.log(a);
console.log(b);
console.log(c);