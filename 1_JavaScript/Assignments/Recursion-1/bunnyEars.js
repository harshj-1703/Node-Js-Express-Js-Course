/*
We have a number of bunnies and each bunny has two big floppy ears. 
We want to compute the total number of ears across all the bunnies 
recursively (without loops or multiplication).
*/

function bunnyEars(n){
    if(n==0)
    {
        return 0;
    }
    else if(n==1)
    {
        return 2;
    }
    // else
    // {
    //     return n*2;
    // }
    else
    {
        return 2+bunnyEars(n-1);
    }
}

let a = bunnyEars(0); //→ 0
let b = bunnyEars(1); //→ 2
let c = bunnyEars(2); //→ 4

console.log(a);
console.log(b);
console.log(c);