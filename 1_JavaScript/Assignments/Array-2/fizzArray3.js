/*
Given start and end numbers, return a new array containing 
the sequence of integers from start up to but not including 
end, so start=5 and end=10 yields {5, 6, 7, 8, 9}. The end 
number will be greater or equal to the start number. Note 
that a length-0 array is valid.
*/

function fizzArray3(start, end){
    arr = [];
    for(i=start;i<end;i++)
    {
        arr.push(i);
    }
    return arr;
}

let a = fizzArray3(5, 10); //→ 5,6,7,8,9
let b = fizzArray3(11, 18); //→ 11,12,13,14,15,16,17
let c = fizzArray3(1, 3); //→ 1,2

console.log(a);
console.log(b);
console.log(c);