/*
We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. 
We are in trouble if they are both smiling or if neither of them is smiling. 
Return true if we are in trouble.
*/

function monkeyTrouble(aSmile, bSmile){
  if(aSmile==bSmile)
  {
    return true;
  }
  else
  {
    return false;
  }
}

let a = monkeyTrouble(true, true);
let b = monkeyTrouble(false, false);
let c = monkeyTrouble(true, false);
let d = monkeyTrouble(false, true);

console.log(a);
console.log(b);
console.log(c);
console.log(d);