// console.dir(document.children)

// console.dir(document.children[0].children[1].children[].color="red")

//outer div by blue 
//  const outerdivs=document.getElementsByTagName("div")
//  outerdivs[0].style.backgroundColor="blue"
//Or
// const outerdivs=document.querySelector("div")
// outerdivs.style.backgroundColor="red"
 
//inner divs background color yellow
// const divchid=Array.from(document.querySelectorAll("div,div"));

// divchid.forEach((ele)=>{
//    ele.style.backgroundColor="yellow"
// })
const ele=document.getElementsByTagName("div")
console.dir(ele)

const mappings={
   Invitation:"you are invited",
   Reminder:"you are reminded",
   Notice:"you are invited",
   Msg:"you have 7 msgs"
};

// for(let i=0;i<ele.length;i++){
//    console.log(ele[i].children[0].innerHTML);
//       ele[i].children[1].innerHTML=mappings[ele[i].children[0].innerHTML];
// }
const ne=document.createElement("div");
const re=document.querySelector("body");
   // ne.innerText="Hi from Dom";
   re.appendChild(ne)

Object.entries(mappings).forEach((ele)=>{
   const newchilddiv=document.createElement("div");
   // newchilddiv.innerText="Hi dom";
   newchilddiv.style.border = "1px solid line";
   newchilddiv.innerHTML=`<h4 style="color:orange">${ele[0]}</h4>
   <p>${ele[1]}</p>`
   ne.appendChild(newchilddiv);
});

