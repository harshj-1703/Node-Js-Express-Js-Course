/*
Given two arrays of ints sorted in increasing order, outer 
and inner, return true if all of the numbers in inner appear 
in outer. The best solution makes only a single "linear" pass 
of both arrays, taking advantage of the fact that both arrays 
are already in sorted order.
*/

function linearIn(outer, inner){
    var a = 0;
      var b = 0;
      while (a < inner.length && b < outer.length) {
        if (outer[b] == inner[a]) {
          b++;
          a++;
        } else b++;
      }
      return a == inner.length;
}

let a = linearIn([1, 2, 4, 6], [2, 4]); //→ true
let b = linearIn([1, 2, 4, 6], [2, 3, 4]); //→ false
let c = linearIn([1, 2, 4, 4, 6], [2, 4]); //→ true

console.log(a);
console.log(b);
console.log(c);