/*
Given a string, compute recursively a new string where 
identical chars that are adjacent in the original 
string are separated from each other by a "*".
*/

function pairStar(str){
    if(str.length <= 1)
    {
		return str;
    }
    if(str[0] == str[1])
    {
        return str[0] + '*' + pairStar(str.substring(1));
    }
    return str[0]+pairStar(str.substring(1));
}

let a = pairStar('hello');  //→ hel*lo
let b = pairStar('xxyy');  //→ x*xy*y
let c = pairStar('aaaa');  //→ a*a*a*a

console.log(a);
console.log(b);
console.log(c);