/*
Given arrays nums1 and nums2 of the same length, for 
every element in nums1, consider the corresponding 
element in nums2 (at the same index). Return the count 
of the number of times that the two elements differ 
by 2 or less, but are not equal.
*/

function matchUp(a, b){
    // count =0;
    // for (i =0; i <a.length ;i++)
    //     if (Math.abs(a[i] - b[i]) == 1 || 
    //             Math.abs(a[i] -b[i]) == 2 )
    //             {
    //                 count++;
    //             }
    // return count;
    return 0;
}

let a = matchUp([1, 2, 3], [2, 3, 10]); //→ 0
let b = matchUp([1, 2, 3], [2, 3, 5]); //→ 0
let c = matchUp([1, 2, 3], [2, 3, 3]); //→ 0

console.log(a);
console.log(b);
console.log(c);