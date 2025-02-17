// Function
//let const : 
//function print(a){
/*     console.log(a);
}
print("rakesh");

function temp(a,b,c){
    console.log("a: "+a);
    console.log("b: "+b);
    console.log("c: "+c);
}
temp(10);
 */

//Cons: 
//1.we can call it before declaration

//Annonymous function
/* const view=function(a){
    console.log("hi",a);
}
view("rakesh"); */
/* printtext("rakesh"); */


//  ES+6  Syntax Arrow function assignment
/* const view=(a)=>{
    console.log("hi",a);
}
view("rakesh");
 */
//function to calculate sum and return its mod 10 value using type1

/* function temp(a,b){
    let s=a+b;
    console.log(s%10)
}
temp(10,21); */

//Type2

/* const view=function (a,b){
    let s=a+b;
    console.log(s%10)
}
view(10,21); */

//Type3

/* const view=(a,b)=>{
    let s=a+b;
    console.log(s%10)
}
view(10,21); */

//Type4 shorter version
const view=(a,b)=>console.log((a+b)%10);
view(10,21);

// Let Const var 
