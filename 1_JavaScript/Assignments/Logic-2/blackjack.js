/*
Given 2 int values greater than 0, return whichever 
value is nearest to 21 without going over. Return 0 if they both go over.
*/

function blackjack(a, b){
    if(a<=21 && b<=21)
    {
        if(21-a > 21-b)
        {
            return b;
        }
        else
        {
            return a;
        }
    }
    else if(a>21 && b<=21)
    {
        return b;
    }
    else if(b>21 && a<=21)
    {
        return a;
    }
    else
    {
        return 0;
    }
}

let a = blackjack(19, 21);
let b = blackjack(21, 19);
let c = blackjack(19, 22);

console.log(a);
console.log(b);
console.log(c);