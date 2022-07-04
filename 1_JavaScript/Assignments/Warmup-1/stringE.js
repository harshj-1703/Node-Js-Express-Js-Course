//Return true if the given string contains between 1 and 3 'e' chars.

function stringE(str){
    let count=0;
    for(i=0;i<str.length;i++)
    {
        if(str[i] === 'e')
        {
            count++;
        }
    }
    if(count >=1 && count <=3)
    {
        return true;
    }
    else
    {
        return false;
    }
}

let a = stringE('Hello');
let b = stringE('Heelle');
let c = stringE('Heelele');

console.log(a);
console.log(b);
console.log(c);