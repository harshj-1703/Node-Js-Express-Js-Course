/*
The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. 
Return true if we sleep in.
*/

function sleepIn(weekday, vacation){
  if(vacation == true || weekday == false)
  {
    return true;
  }
  else
  {
    return false;
  }
}

let a = sleepIn(true, true);
let b = sleepIn(true, false);
let c = sleepIn(false, true);
let d = sleepIn(false, false);

console.log(a);
console.log(b);
console.log(c);
console.log(d);