function squareUp(n){
    result = [];
    x = n-1, pass = 1, index = 0;
  if(n == 0) { return result; }
  for(i = n-1; i < result.length; i+=n) {
     index = i;
     for(k = 1; k <= pass; k++) {
       if(k == 0) { break; }
       result[index] = k;
       index--;
     }
     pass++;
  }
  return result;
}

let a = squareUp(3);  //→ 0,0,1,0,2,1,3,2,1
let b = squareUp(2);  //→ 0,1,2,1
let c = squareUp(4);  //→ 0,0,0,1,0,0,2,1,0,3,2,1,4,3,2,1

console.log(a);
console.log(b);
console.log(c);