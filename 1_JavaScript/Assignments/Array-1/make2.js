/*
Given 2 int arrays, a and b, return a new array length 2 
containing, as much as will fit, the elements from a followed 
by the elements from b. The arrays may be any length, including 0, 
but there will be 2 or more elements available between the 2 arrays.
*/

function make2(a, b){
    if(a.length >= 2)
    {
        let arr = [];
        arr.push(a[0]);
        arr.push(a[1]);
        return arr;
    }
    else
    {
        if(a.length == 1)
        {
            let arr = [a[0]];
            arr.push(b[0]);
            return arr;
        }
        else
        {
            let arr = [];
            arr.push(b[0]);
            arr.push(b[1]);
            return arr;
        }
    }
}

let a = make2([4, 5], [1, 2, 3]); //→ 4,5
let b = make2([4], [1, 2, 3]); //→ 4,1
let c = make2([], [1, 2]); //→ 1,2

console.log(a);
console.log(b);
console.log(c);