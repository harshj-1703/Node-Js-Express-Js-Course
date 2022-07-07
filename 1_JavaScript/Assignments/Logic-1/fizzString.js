/*
Given a string str, if the string starts with "f" return "Fizz". 
If the string ends with "b" return "Buzz". If both the "f" and "b" 
conditions are true, return "FizzBuzz". In all other cases, 
return the string unchanged.
*/

function fizzString(str){
    if(str[0]=='f' && str[str.length-1]=='b')
    {
        return 'FizzBuzz';
    }
    else if(str[0]=='f')
    {
        return 'Fizz';
    }
    else if(str[str.length-1]=='b')
    {
        return 'Buzz';
    }
    else
    {
        return str;
    }
}

let a = fizzString('fig');  //→ Fizz
let b = fizzString('dib');  //→ Buzz
let c = fizzString('fib');  //→ FizzBuzz

console.log(a);
console.log(b);
console.log(c);