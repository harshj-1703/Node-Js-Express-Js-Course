/*
Consider the leftmost and righmost appearances of some value 
in an array. We'll say that the "span" is the number of elements 
between the two inclusive. A single value has a span of 1. Returns 
the largest span found in the given array. (Efficiency is not a priority.)
*/

function maxSpan(nums){
    var span = 0;
    var tmp = 0;
  
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length; j++) {
        if (nums[i] == nums[j]) {
          tmp = j-i+1;
          span = Math.max(tmp,span);
        }
      }
    }
    return span;
}

let a = maxSpan([1, 2, 1, 1, 3]); //→ 4
let b = maxSpan([1, 4, 2, 1, 4, 1, 4]); //→ 6
let c = maxSpan([1, 4, 2, 1, 4, 4, 4]); //→ 6

console.log(a);
console.log(b);
console.log(c);