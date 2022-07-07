/*
Given a string, count the number of words ending in 'y' 
or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" 
count, but not the 'y' in "yellow" (not case sensitive). 
We'll say that a y or z is at the end of a word if there 
is not an alphabetic letter immediately following it. 
(Note: Character.isLetter(char) tests if a char is an alphabetic letter.)
*/

function countYZ(str){
    let count = 0;
    str = str.toLowerCase();
    for(i=0;i<str.length;i++)
    {
        if(str[i] == 'y' || str[i] == 'z')
        {
            if(i < str.length-1 && (str[i+1].toLowerCase() === str[i+1].toUpperCase()))
            {
                count++;
            }
            else if(i == str.length - 1)
            {
                count++;
            }
        }
    }
    return count;
}

let a = countYZ('fez day');
let b = countYZ('day fez');
let c = countYZ('day fyyyz');

console.log(a);
console.log(b);
console.log(c);