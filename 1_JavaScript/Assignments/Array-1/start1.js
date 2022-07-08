/*
Start with 2 int arrays, a and b, of any length. Return 
how many of the arrays have 1 as their first element.
*/

function start1(a, b){
    if(a[0] == 1 && b[0]==1)
    {
        return 2;
    }
    else if(a[0] == 1 || b[0] == 1)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

let a = start1([1, 2, 3], [1, 3]); //→ 2
let b = start1([7, 2, 3], [1]); //→ 1
let c = start1([1, 2], []); //→ 1

console.log(a);
console.log(b);
console.log(c);