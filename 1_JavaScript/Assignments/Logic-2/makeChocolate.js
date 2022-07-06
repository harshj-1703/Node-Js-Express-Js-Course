/*
We want make a package of goal kilos of chocolate. 
We have small bars (1 kilo each) and big bars (5 kilos each). 
Return the number of small bars to use, assuming we always 
use big bars before small bars. Return -1 if it can't be done.
*/

function makeChocolate(small, big, goal){
    let rem = goal%5;
    if(small+(big*5) < goal)
    {
        return -1;
    }
    else if(goal < big*5)
    {
        return rem;
    }
    else
    {
        return (goal-(big*5));
    }
}

let a = makeChocolate(4, 1, 9);
let b = makeChocolate(4, 1, 10);
let c = makeChocolate(4, 1, 7);

console.log(a);
console.log(b);
console.log(c);