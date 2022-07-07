/*
Your cell phone rings. Return true if you should answer it. Normally 
you answer, except in the morning you only answer if it is your 
mom calling. In all cases, if you are asleep, you do not answer.
*/

function answerCell(isMorning, isMom, isAsleep){
    if(isAsleep)
    {
	    return false;
    }
	if((isMorning && isMom) || !isMorning)
    {
	    return true;
    }
	else
    {
        return false;
    }
}

let a = answerCell(false, false, false);  //→ true
let b = answerCell(false, false, true);  //→ false
let c = answerCell(true, false, false);  //→ false

console.log(a);
console.log(b);
console.log(c);