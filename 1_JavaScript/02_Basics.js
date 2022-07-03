let x,y,z; //variable declaration
var p;

const q=20;

let xyz = 'xyz';
xyz = 'pqr';

x=5;
y=6;
z=x+y;

console.log(z);
console.log(xyz);

//difference between == and ===
let a=3;
let b='3';

console.log('\na==b',a==b);     //compare just values
console.log('\na===b',a===b);   //compare values and type


//Arithmetic operations
let s=5;
let t=4;

console.log('\ns+t : ',s+t);    //addition
console.log('\ns-t : ',s-t);    //subtraction
console.log('\ns*t : ',s*t);    //multiplication
console.log('\ns**t : ',s**t);  //expo
console.log('\ns/t : ',s/t);    //division
console.log('\ns%t : ',s%t);    //modulo
console.log('\ns++ : ',s++);    //increment
console.log('\ns-- : ',s--);    //decrement


//Array fundamentals
let arr = [1,2,3,4,'1'];
console.log(arr);
console.log(arr[0]==arr[4]); //compare arrray

//Object
let o = {
    id: 'abc123',
    name: 'abc',
    age: '20'
}; 

//String methods
let str1 = 'Hello Everyone';
console.log('String length: ',str1.length);

//slice(startIndex, endIndex)
console.log(str1.slice(6,9));   //6,7,8
console.log(str1.slice(-8,-2)); //-8,-7,-6,-5,-4,-3

//substring(startIndex, endIndex)
console.log(str1.substring(6,9));   //6,7,8
console.log(str1.substring(-2,4)); //0,1,2,3

//substr(startIndex, count)
console.log(str1.substr(6,2));  //6,7
console.log(str1.substr(0));    //All