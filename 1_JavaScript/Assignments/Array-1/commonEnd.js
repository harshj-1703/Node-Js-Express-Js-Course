/*
Given 2 arrays of ints, a and b, return true if they have the 
same first element or they have the same last element. 
Both arrays will be length 1 or more.
*/

function commonEnd(a, b){
    if(b.length == 1)
    {
        if(a[0] == b[0])
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    if(a[a.length-1] == b[b.length-1])
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = commonEnd([1, 2, 3], [7, 3]); //→ true
let b = commonEnd([1, 2, 3], [7, 3, 2]); //→ false
let c = commonEnd([1, 2, 3], [1, 3]); //→ true

console.log(a);
console.log(b);
console.log(c);