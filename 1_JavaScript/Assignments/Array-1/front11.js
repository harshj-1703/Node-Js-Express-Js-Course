/*
Given 2 int arrays, a and b, of any length, return a 
new array with the first element of each array. If 
either array is length 0, ignore that array.
*/

function front11(a, b){
    arr = [];
    if(a.length > 0 && b.length > 0)
    {
        arr.push(a[0]);
        arr.push(b[0]);
        return arr;
    }
    else if(a.length > 0 && b.length <= 0)
    {
        arr.push(a[0]);
        return arr;
    }
    else if(b.length > 0 && a.length <= 0)
    {
        arr.push(b[0]);
        return arr;
    }
    else
    {
        return arr;
    }
}

let a = front11([1, 2, 3], [7, 9, 8]); //→ 1,7
let b = front11([1], [2]); //→ 1,2
let c = front11([1, 7], []); //→ 1

console.log(a);
console.log(b);
console.log(c);