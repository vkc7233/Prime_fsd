const arr=[{Name:"Anuj",City:"Delhi",Email:"vkc723"}
   ,{Name:"Rakesh",City:"Delhi",Email:"vkc723"}
   ,{Name:"Raj",City:"Delhi",Email:"vkc723"}
   ,{Name:"Ram",City:"Delhi",Email:"vkc723"}
];

const root=document.getElementById("parent");
arr.forEach((elem)=>{
   const ncard=document.createElement("div");
   ncard.className="card";
   ncard.addEventListener("click",()=>{
      console.log("div click");
       ncard.style.backgroundColor=getrandomcolor();
   },
false
);

   ncard.innerHTML=`
   <h4>  ${elem.Name}</h4>
    <h6>  ${elem.City}</h6>
     <p class='text'>  ${elem.Email}</p>
   `
   root.appendChild(ncard);
});

const handlebackgroundchange=()=>{
   console.log("btn clicked");
   //logic to change background: 
     const bodyele=document.querySelector('body');
     bodyele.style.backgroundColor=getrandomcolor();
};

const getrandomcolor=()=>{
   const randomRed=Math.floor(Math.random()*255);
   const randomGreen=Math.floor(Math.random()*255);
   const randomBlue=Math.floor(Math.random()*255);
   return `rgb(${randomRed},${randomGreen},${randomBlue})`;
}
 const textelement=document.querySelector('.text');
 textelement.addEventListener("click",()=>{
   console.log("Para Click");
   textelement.style.backgroundColor=getrandomcolor();
   event.stopPropagation();
 })
 

