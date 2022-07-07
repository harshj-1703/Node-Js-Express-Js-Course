/*
Given a string, return the sum of the numbers appearing 
in the string, ignoring all other characters. A number is 
a series of 1 or more digit chars in a row. (Note: Character.isDigit(char) 
tests if a char is one of the chars '0', '1', .. '9'. 
Integer.parseInt(string) converts a string to an int.)
*/

function sumNumbers(str){
    let len = str.length;
    let sum = 0;
    let tmp = '';

    for(i=0;i<len;i++)
    {
        if(str[i] > 0 && str[i] <= 9)
        {
            if (i < len-1 && str[i+1] > 0 && str[i+1] <= 9)
            {
                tmp += str[i];
            }
            else
            {
                tmp += str[i];
                sum += parseInt(tmp);
                tmp = "";
            }
        }
    }
    return sum;
}

let a = sumNumbers('abc123xyz'); //→ 123
let b = sumNumbers('aa11b33'); //→ 44
let c = sumNumbers('7 11'); //→ 18

console.log(a);
console.log(b);
console.log(c);