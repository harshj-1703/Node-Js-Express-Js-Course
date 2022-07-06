/*
Given a string and a second "word" string, we'll say 
that the word matches the string if it appears at the 
front of the string, except its first char does not need 
to match exactly. On a match, return the front of the string, 
or otherwise return the empty string. So, so with the string 
"hippo" the word "hi" returns "hi" and "xip" returns "hip". 
The word will be at least length 1.
*/

function startWord(str, word){
    let lenStr = str.length;
    let lenWord = word.length;
	if (lenStr == 0)
    {
	    return "";
    }
	if (lenWord > lenStr)
    {
	    return "";
    }
	if (word.length == 1)
    {
	    return str.substring(0,1);
    }
	else if (str.substring(1,lenWord)==(word.substring(1,lenWord)))
    {
	    return str.substring(0,lenWord);
    }
	else
    {
        return "";
    }
}

let a = startWord('hippo', 'hi');
let b = startWord('hippo', 'xip');
let c = startWord('hippo', 'i');

console.log(a);
console.log(b);
console.log(c);