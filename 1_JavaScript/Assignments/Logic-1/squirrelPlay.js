/*
The squirrels in Palo Alto spend most of the day playing. 
In particular, they play if the temperature is between 60 and 
90 (inclusive). Unless it is summer, then the upper limit is 100 
instead of 90. Given an int temperature and a boolean isSummer, 
return true if the squirrels play and false otherwise.
*/

function squirrelPlay(temp, isSummer){
    if (isSummer && temp <= 100 && temp >= 60) return true;
    else if (isSummer != temp && temp <= 90 && temp >= 60) return true;
    else return false;
}

let a= squirrelPlay(70, false); //→ true
let b= squirrelPlay(95, false); //→ false
let c= squirrelPlay(95, true); //→ true
;
console.log(a);
console.log(b);
console.log(c);