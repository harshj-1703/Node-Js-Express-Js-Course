/*
Start with 2 int arrays, a and b, each length 2. Consider 
the sum of the values in each array. Return the array which 
has the largest sum. In event of a tie, return a.
*/

function biggerTwo(a, b){
    suma = 0;
    sumb = 0;
    for(i=0;i<a.length;i++)
    {
        suma += a[i];
    }
    for(i=0;i<b.length;i++)
    {
        sumb += b[i];
    }
    if(suma > sumb)
    {
        return a;
    }
    else if(suma == sumb)
    {
        return a;
    }
    else
    {
        return b;
    }
}

let a = biggerTwo([1, 2], [3, 4]);  //→ 3,4
let b = biggerTwo([3, 4], [1, 2]);  //→ 3,4
let c = biggerTwo([1, 1], [1, 2]);  //→ 1,2

console.log(a);
console.log(b);
console.log(c);