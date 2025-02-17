/* onst temp=()=>{
    if(true){
        var username="rakesh";
    }
    console.log(username);
}
temp();

console.log(username); //error */

/* var username="rakesh";

const temp=()=>{
    if(true){
        var username="rakesh";
    }
    console.log(username);
}
temp();

console.log(username); 


const summod10 = (a,b) => { console.log((a+b)%10); }

summod10(10,21); 
 */
const summod10 = (a,b) => { console.log((a+b)%10); 
    const ans=(a+b)%10;
const printpretty=(txt)=>{
    console.log("---",txt,"----");}
    printpretty(ans);
    console.log("Sum done");
}
summod10(10,21);
