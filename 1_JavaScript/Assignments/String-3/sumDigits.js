/*
Given a string, return the sum of the digits 0-9 that 
appear in the string, ignoring all other characters. 
Return 0 if there are no digits in the string. (Note: Character.isDigit(char) 
tests if a char is one of the chars '0', '1', .. '9'. 
Integer.parseInt(string) converts a string to an int.)
*/

function sumDigits(str){
    sum = 0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] >= 1 && str[i] <= 9)
        {
            sum += parseInt(str[i]);
        }
    }
    return sum;
}

let a = sumDigits('aa1bc2d3'); //→ 6
let b = sumDigits('aa11b33'); //→ 8
let c = sumDigits('Chocolate'); //→ 0

console.log(a);
console.log(b);
console.log(c);