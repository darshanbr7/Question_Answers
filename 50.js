let x = 2
x= x++ *++x
console.log(x)
//what is the output and why ?
/*  
     break down this code in to smaller steps
     in line 1 -> we are assiging 2 to the variable x
     in line to first (x++) => it  is going to increment the value of x , x become 3 in next usage
     then ++x it is preincrement the value of the x 3 => 4
     the final equation became  x = 2 * 4  ==> 8
*/

// example for postfix expression
let a = 10;
console.log( a )
a++; // assigh then increment 
console.log( a )

// example for prefix expression
let b = 10
console.log( b)
++b // first increment then assign 
console.log( b )