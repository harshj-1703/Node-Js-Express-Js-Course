/*
Given 2 int values, return whichever value is nearest to the value 10, 
or return 0 in the event of a tie. Note that Math.abs(n) 
returns the absolute value of a number.
*/

function close10(a, b){
    var c = Math.abs(10 - a);
    var d = Math.abs(10 - b);

    if(c > d)
    {
        return b;
    }
    else if(d > c)
    {
        return a;
    }
    else
    {
        return 0;
    }
}

let a = close10(8, 13);
let b = close10(13, 8);
let c = close10(13, 7);

console.log(a);
console.log(b);
console.log(c);