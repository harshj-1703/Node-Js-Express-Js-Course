/*
Return the sum of two 6-sided dice rolls, each in the range 1..6. 
However, if noDoubles is true, if the two dice show the same value, 
increment one die to the next value, wrapping around to 1 if its value was 6.
*/

function withoutDoubles(die1, die2, noDoubles){
    if(noDoubles) 
    {
        if (die1 == die2) 
        {
            if (die1 != 6)
            {
                return die1 + 1 + die2;
            }
            else
            {
                return 1 + die2;
            }
        } 
    }
    return die1 + die2;
}

let a = withoutDoubles(2, 3, true);  //→ 5
let b = withoutDoubles(3, 3, true);  //→ 7
let c = withoutDoubles(3, 3, false); //→ 6

console.log(a);
console.log(b);
console.log(c);