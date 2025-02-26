/* const arr=["fruits","Hello",24];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

for(let i in arr){
     //keys
    console.log("in::", i);
}

for(let i of arr){
    //values:: only works iterables
    console.log("of ::" ,i);
} */
/* 
while(arr.length>0){
    console.log(arr.pop());
}

do {
    console.log(arr.pop());
}  while(arr.length>0); */

const username=prompt("Enter your name");
console.log(username);

const subject=prompt("Enter number subject");

const marks={};

for(let i=0;i<subject;i++){
    marks[i]=prompt("Enter the marks of subject "+(i+1));
}
let p=0;
for(let i in marks){
    p+=parseInt(marks[i]);
}

let m=marks[0];
let index=0;
for(let i=0;i<subject;i++){
        if(m<marks[i]){
            m=marks[i];
            index=i;
        }
}

console.log("Highest marks in subject "+(index+1)+" is " + m);

p=p/subject;

console.log(p);

if(p>90){       
    console.log("Grade A+");
}
else if(p>80){
    console.log("Grade A");
}
else if(p>70){
    console.log("Grade B");
}
else if(p>60){
    console.log("Grade C");
}
else if(p>50){
    console.log("Grade D");
}
else if(p>35){
    console.log("Grade E");
}
else if(p<35){
    console.log("Fail");
}










