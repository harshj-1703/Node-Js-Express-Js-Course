/*
Given three ints, a b c, one of them is small, one is 
medium and one is large. Return true if the three values 
are evenly spaced, so the difference between small and 
medium is the same as the difference between medium and large.
*/

function evenlySpaced(a, b, c){
    if((a+b+c)%2==0)
    {
        if((Math.abs(a-b) == Math.abs(b-c)) || 
        (Math.abs(a-c) == Math.abs(a-b)) || 
        (Math.abs(b-c) == Math.abs(b-a)) || 
        (Math.abs(a-c) == Math.abs(b-c)))
        {
            if(((a-b)!=0 && (b-c)!=0 && (a-c)!=0 )|| a==b && b==c)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }
    else
    {
        return false;
    }
}

let a = evenlySpaced(2, 4, 6);
let b = evenlySpaced(4, 6, 2);
let c = evenlySpaced(4, 6, 3);

console.log(a);
console.log(b);
console.log(c);