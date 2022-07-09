/*
We have triangle made of blocks. The topmost row has 1 block, the 
next row down has 2 blocks, the next row has 3 blocks, and so on. 
Compute recursively (no loops or multiplication) the total number 
of blocks in such a triangle with the given number of rows.
*/

function triangle(rows){
    if(rows == 0)
    {
        return 0;
    }
    else
    {
        return rows+triangle(rows-1);
    }
}

let a = triangle(0);  //→ 0
let b = triangle(1);  //→ 1
let c = triangle(2);  //→ 3

console.log(a);
console.log(b);
console.log(c);