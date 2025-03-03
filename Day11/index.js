const getdata=(text)=>{
  const pr= fetch(`https://dummyjson.com/recipes/search?q=${text}`);
  pr.then((res)=>{
   const pr2=res.json();
   pr2.then((data)=>{
      showcards(data.recipes)
   });
  });
};

const root=document.getElementById("cards-container");
const showcards=(dataArr)=>{
   root.innerHTML="";
   const newdiv=document.createElement('div');
   dataArr.forEach((ele)=>{
      newdiv.className="card";
      newdiv.innerHTML=`
      <h4>${ele.name}</h4>
      <img src="${ele.image}" width="100px">
      <p>${ele.cuisine}</p>
      `;
   });
   root.appendChild(newdiv);
};
let timeoutid=null;

const handleSearch=(e)=>{
   if(timeoutid){
      clearTimeout(timeoutid);
   }
   timeoutid=setTimeout(()=>{getdata(e.target.value)},1000);
}