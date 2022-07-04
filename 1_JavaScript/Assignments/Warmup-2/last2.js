/*
Given a string, return the count of the number of 
times that a substring length 2 appears in the string 
and also as the last 2 chars of the string, 
so "hixxxhi" yields 1 (we won't count the end substring).
*/

function last2(str){
    if(str.length < 2)
    {
        return 0;
    }
    let end = str.substring(str.length-2);
    let count = 0;
    for(i=0;i<str.length-2;i++)
    {
        let sub = str.substring(i,i+2);
	    if(sub === end)
        {
	      count++;
	    }
    }
    return count;
}

let a = last2('hixxhi');
let b = last2('xaxxaxaxx');
let c = last2('axxaaxx');

console.log(a);
console.log(b);
console.log(c);