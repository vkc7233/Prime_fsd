const data=[
   {email:"vkc7233@gmail.com",
      name:"Rakesh",
      city:"Delhi"
   },
   {email:"akc12@gmail.com",
      name:"Raj",
      city:"Mumbai"
   },
   {email:"nkc35@gmail.com",
      name:"Rishabh",
      city:"Noida"
   },
   {email:"vin63@gmail.com",
      name:"Shivam",
      city:"Noida"
   }
];


// const arr=[{Name:"Anuj",City:"Delhi",Email:"vkc723"}
//    ,{Name:"Rakesh",City:"Delhi",Email:"vkc723"}
//    ,{Name:"Raj",City:"Delhi",Email:"vkc723"}
//    ,{Name:"Ram",City:"Delhi",Email:"vkc723"}
// ];

// const root=document.getElementById("parent");
// arr.forEach((elem)=>{
//    const ncard=document.createElement("div");
//    ncard.className="card";
//    ncard.addEventListener("click",()=>{
//       console.log("div click");
//        ncard.style.backgroundColor=getrandomcolor();
//    },
// false
// );

// const deleteBtn = document.createElement("button");
// deleteBtn.innerText = "❌";
// deleteBtn.className = "delete-btn";

// const c=document.getElementsByClassName("card");
// console.log(c);
// c.appendChild(deleteBtn);

// deleteBtn.addEventListener("click", (event) => {
//     console.log("Delete button clicked");
//     ncard.remove(); 
//     event.stopPropagation(); 
// });

//    ncard.innerHTML=`
//    <h4>  ${elem.Name}</h4>
//     <h6>  ${elem.City}</h6>
//      <p class='text'>  ${elem.Email}</p>
//    `
//    root.appendChild(ncard);
// });

// const handlebackgroundchange=()=>{
//    console.log("btn clicked");
//    //logic to change background: 
//      const bodyele=document.querySelector('body');
//      bodyele.style.backgroundColor=getrandomcolor();
// };

// const getrandomcolor=()=>{
//    const randomRed=Math.floor(Math.random()*255);
//    const randomGreen=Math.floor(Math.random()*255);
//    const randomBlue=Math.floor(Math.random()*255);
//    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
// }
//  const textelement=document.querySelector('.text');
//  textelement.addEventListener("click",()=>{
//    console.log("Para Click");
//    textelement.style.backgroundColor=getrandomcolor();
//    event.stopPropagation();
//  })
 
//  //write code for 

const root=document.getElementById("parent");
const showcards=(newdata)=>{
   showoptions();
   root.innerHTML="";
   newdata.forEach((ele,idx)=>{
      const card=document.createElement("div");
      card.className="card";
      card.innerHTML=`
      <h6>${ele.id}</h6>
      <h4>${ele.name}</h4>
      <p>${ele.city}</p>
      <button onclick="deletecard(event,'${ele.email}')">❌</button>
      `;
      root.appendChild(card);
   });
};
const deletecard=(e,eleId)=>{
   //e.target.remove() it remove the self parent
   //  e.target.parentElement.remove();
   //---another way to delete
   // console.log(e,id);
   // data.splice(idx,1);
   // showcards(data);
   //correct way
      const index=data.findIndex((ele)=>
         ele.id==eleId

      );
      data.splice(index,1);
      showcards(data);
};
const choosecity=(e)=>{
   const selectedcity=e.target.value;
   const newdata=data.filter((elem)=>{
         if(elem.city==selectedcity){
            return true;
         }
         return false;
   });
  showcards(newdata);
};


const handleFormSubmit=(e)=>{
    console.log(e);
    e.preventDefault();
   //  console.log(e.target.email.value);
   //  console.log(e.target[0].value);
   //  console.log(e.target.name.value);
   //  console.log(e.target[1].value);
   //  console.log(e.target.city.value);
   //  console.log(e.target[2].value);
      const Emailexists=data.some((elem)=>{
         return elem.email===e.target.email.value;
      });
      if(Emailexists){
         alert("Email already Exists!");
         return ;

      }
   //add the data
   const newEle={
      name:e.target.name.value,
      city:e.target.city.value,
      email:e.target.email.value
   }

   data.push(newEle);
   showcards(data);
}


const cities=data.map((elem)=>elem.city);
const selectElement=document.getElementsByTagName("select")[0];
const showoptions=()=>{
     selectElement.innerHTML="";
     const citiesObj={};
     data.forEach((elem)=>(citiesObj[elem.city]=true));
     const cities=Object.keys(citiesObj);
     cities.forEach((city)=>{
       const newoption=document.createElement("option");
       newoption.value=city;
       newoption.innerText=city;
       selectElement.appendChild(newoption);
     });
}

showcards(data);
