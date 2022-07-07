/*
Given a string, return a string where every appearance 
of the lowercase word "is" has been replaced with "is not". 
The word "is" should not be immediately preceeded or followed 
by a letter -- so for example the "is" in "this" does not count. 
(Note: Character.isLetter(char) tests if a char is a letter.)
*/

function notReplace(str){
    temp = '';
    for(i=0;i<str.length;i++)
    {
        if(i-1 >= 0 && (str[i-1].toLowerCase() != str[i-1].toUpperCase())
            || i+2 < str.length && (str[i+2].toLowerCase() != str[i+2].toUpperCase()))
        {
            temp += str[i];
        }
        else if(i+1 < str.length && str.substring(i,i+2) == "is")
        {
            temp += 'is not';
            i++;
        }
        else
        {
            temp += str[i];
        }
    }
    return temp;
}

let a = notReplace('is test'); //→ is not test
let b = notReplace('is-is'); //→ is not-is not
let c = notReplace('This is right'); //→ This is not right

console.log(a);
console.log(b);
console.log(c);