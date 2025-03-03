const array=[1,2,3,4,5,6,7,8,9,10];

array.forEach(element => {
   const d=document.getElementById("parent");

   const ul=document.createElement("ul");
   ul.innerText=`Unordered list ${element}`;
   
   const li1=document.createElement("li");
   li1.innerText="item 1";
   const li2=document.createElement("li");
   li2.innerText="item 2";
   const li3=document.createElement("li");
   li3.innerText="item 3";
   
   ul.appendChild(li1);
   ul.appendChild(li2);
   ul.appendChild(li3);
   
   d.appendChild(ul);
   d.style.backgroundColor="lightblue";
   d.style.padding="20px";
});


// console.log(React);
// console.log(ReactDOM);


// const domroot=document.getElementById("parent");
// const root=ReactDOM.createRoot(domroot);


// const li1=React.createElement("li",{
//    style:{
//       color:"blue",
//    },
// },"item 1");//-->type,options,children
// const li2=React.createElement("li",{
//    style:{
//       color:"red",
//    },
// },"item 2");//-->type,options,children
// const li3=React.createElement("li",{
//    style:{
//       color:"yellow",
//    },
// },"item 3");//-->type,options,children

// const ul=React.createElement("ul",{},[li1,li2,li3]);

// root.render(ul);

//------------------
//  const domroot=document.getElementById("parent");
// const root=ReactDOM.createRoot(domroot);

// // const title=React.createElement("h1",{},"Hello from react dom");


// const title2={
//    $$typeof:Symbol.for("react.element"),
//    type: "h1",
//    key: null,
//    ref: null,
//    "props": {
//        "children": "Hello from react dom"
//    },
//    _owner: null,
//    _store: {}
// }

// // console.log(title ,typeof(title));
//  root.render(title2);

// const domroot=document.getElementById("parent");
// const root=ReactDOM.createRoot(domroot);




// const title2=<h1>Hello from jsx</h1>// react element
// // const title2=React.createElement("h1",{},"Hello")// react element

// const Title3=()=>{
// return <h1>Hello from jsk</h1>;
// }// react component
//  root.render(title2);
//  root.render(Title3());
 //root.render(<Title3/>);