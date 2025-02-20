// const sum=(a,b)=>{
//     return a+b;
// }

// const printpretty=(txt)=>{
//     console.log("----");
//     console.log(txt);
//     console.log("----");
// }

// const result=sum(20,30);
// printpretty(result);

/////CallBack function 
    

// const sum=(a,b)=>{
//     return a+b;
// }

// const printpretty=(txt)=>{
//     console.log("----");
//     console.log(txt);
//     console.log("----");
// }

// printpretty(sum(20,30));


//--------------------------------------

/* const sum=(a,b,c)=>{
    //Higher order function
    const ans=a+b;
    //return ans;
    c(ans);
}

const printpretty=(txt)=>{
    console.log("----");
    console.log(txt);
    console.log("----");
}

// printpretty(sum(20,30));
sum(20,30,printpretty);  */  //Now this is callback function
//Here printpretty is callback function
//Callback function is a function which is passed as an argument to another function
//Callback function is called by another function
//Callback function is executed inside another function
//Callback function is used to handle asynchronous operations in javascript
//Callback function is used to handle events in javascript
//Callback function is used to handle user actions in javascript
//--------------------------------------
const getmetadata=()=>{
    const user=prompt(" Please Enter your name");
    console.log("Hello",user);
    const numofsub=parseInt(prompt("Please Enter the number of subjects"));//parsefloat(),Number() also can be used for the same work
    return numofsub;
};

const getsub=(num)=>{
    const records={};
    for(let i=0;i<num;i++){
        const subname=prompt(`Enter the subject ${i+1}`);
        const marks=parseInt(prompt(`Enter the marks of ${subname}`));
        records[subname]=marks;
    }
     console.log(records);
}

const record={
    maths:90,
    physics:80,
    chemistry:70
}
const getpercentage=(obj)=>{

    const marks=Object.values(obj);
    let total=0;
    const totalsubject=0;

    marks.forEach((a)=>{
        total+=a;
        totalsubject++;
    });

    const percentage=(total/totalsubject);
    return percentage;
}

const gethighestscoringSubject=(obj)=>{
    const marks=Object.entries(obj);
    let highest=0;
    let subject="";
    marks.forEach((a)=>{
      const sn=a[0];
        const sm=a[1];
        if(a[1]>highest){
            highest=a[1];
            subject+=a[0];
        }
    });
    console.log("The highest scoring subject is",subject);
    console.log("The highest score is",highest);
}


//nst percentage=getpercentage(record);

// const getgrades=(percentage)=>{
//     const grade=[[60,"D"],[70,"C"],,[80,"B"],[90,"A"],[100,"A+"]];
//     let gradevalue="";
//     grade.forEach((a)=>{
//         if(percentage>=a[0]){
//             gradevalue=a[1];
//         }
//     });
//     console.log("The grade is",gradevalue);
// }

//const num=getmetadata();
//const record=getsub(getmetadata());


//console.log("The percentage is",percentage);

//getgrades(percentage);
// const getgrades=(percentage)=>{
//     const grade=[[60,"D"],[70,"C"],,[80,"B"],[90,"A"],[100,"A+"]];
//     let gradevalue="";
//     grade.findIndex((a)=>{
//         if(percentage>=a[0]){
//             gradevalue=a[1];
//         }
//     });
//     console.log("The grade is",gradevalue);
// }

const arr=[10,20,30];

// const newarr=arr.map((a)=>{
//     return a*2;
// });

// console.log(newarr);
//with default value
// arr.reduce((a,b,idx,c)=>{
//     console.log(a,b,idx,c);
//     return a+b;
// },0);

// without default value
// arr.reduce((a,b,idx,c)=>{
//     console.log(a,b,idx,c);
//     return a+b;
// });

// arr.reduce((a,e)=>{
//     console.log(a,e);
//     return a*e;
// });

// const ans= arr.reduce((a,e)=>{
//     console.log(a,e);
//     return a*e;
// });
// console.log(ans);

// const newarr=arr.reduce((a,e)=>{
//     a.push(e*2);
//     return a;
// },[]);
// console.log(newarr);

const ele=document.getElementById("a")
ele.style.color="red";











