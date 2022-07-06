/*
For this problem, we'll round an int value up to the 
next multiple of 10 if its rightmost digit is 5 or more, 
so 15 rounds up to 20. Alternately, round down to the 
previous multiple of 10 if its rightmost digit is less 
than 5, so 12 rounds down to 10. Given 3 ints, a b c, return 
the sum of their rounded values. To avoid code repetition, 
write a separate helper "public int round10(int num) 
{" and call it 3 times. Write the helper entirely below 
and at the same indent level as roundSum().
*/

function roundSum(a, b, c){
    function round10(n)
    {
        if(n%10 < 5)
        {
            return n - (n%10); 
        }
        else
        {
            return n + (10 - (n%10));
        }
    }
    return round10(a) + round10(b) + round10(c);
}

let a = roundSum(16, 17, 18);
let b = roundSum(12, 13, 14);
let c = roundSum(6, 4, 4);

console.log(a);
console.log(b);
console.log(c);