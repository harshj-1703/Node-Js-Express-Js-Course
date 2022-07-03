/*
We have a loud talking parrot. 
The "hour" parameter is the current hour time in the range 0..23. 
We are in trouble if the parrot is talking and the hour is before 7 or after 20. 
Return true if we are in trouble.
*/

function parrotTrouble(talking, hour){
  if(hour < 7 || hour >= 21)
  {
    if(talking == true)
    {
        return true;
    }
    else
    {
        return false;
    }
  }
  else
  {
    return false;
  }
}

let a = parrotTrouble(true, 6);
let b = parrotTrouble(true, 7);
let c = parrotTrouble(false, 6);
let d = parrotTrouble(false, 21);
let e = parrotTrouble(true, 9);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);