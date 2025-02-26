// console.log("start");

// const handleInnerCall=()=>{
//    console.log("step y");
// }

// const handleCall=()=>{
//    console.log("step m");

// handleInnerCall();
//  console.log("step n");
// }

// document.querySelector("body").addEventListener("click",handleCall);

// console.log("end");

//#  Event Listeners


// console.log("start");

// const handleInnerCall=()=>{
//    console.log("step y");
//  }

// const handleCall=()=>{
//    console.log("step m");

// handleInnerCall();
//  console.log("step n");
// }

// setTimeout(handleCall,10000); //time in milliseconds 

//  console.log("end");

//# setinterval

// setTimeout(handleCall,0);

// console.log("start");

// const handleInnerCall=()=>{
//    console.log("step y");
//  }

// function handleCall (){
//    console.log("step m");

// handleInnerCall();
//  console.log("step n");
// }
//  //time in milliseconds 

//  console.log("end");

//

//    console.log("A");
// const handleCall=()=>{
//    console.log("H");
// }

// setTimeout(()=>{
//    console.log("N");

//    setTimeout(()=>{
//       console.log("p");
//    },0);

//    handleCall();

//    console.log("B");
// },5000);

// console.log("c");

//-------------------------------------------------

/*Inversion of Control

hyderabad: take user credentials and do the payments via wallet

noida:make the payment from the wallet by doing the required checks

banglore: to handle these two teams and implement wallet functionality

//Case 1 (requirement)
----> const userId=handleUser()
---->if(userId){
---->      const resp=handlePayment(userId)
---->       console.log(resp)
---->}
---->else{ 
---->       console.log("invalid details");}
---->

Case 2 (using Callbacks)
---->const resp=handleUser(handlepayment)
                        //what if the team calls handlepayment 2 .toTimeString()
                        // or even with wrong credentials
                        //never calls it
---->

---->
//Using promises
->  const resp=handleUser()-->return a promise
---->Then {
---->      const resp=handlePayment(userId)
---->       console.log(resp)
---->}
---->catch{ 
---->       console.log("invalid details");}
---->

---->
*/

/* ------------------------------------------------------------------------
   Promises: fetch()
*/

// const pr=fetch('https://dummyjson.com/products');

// // console.log(pr);
// pr.then((a)=>{
//    console.log("a",a);
//    const pr2=a.json();
//    pr2.then((data)=>{
//       console.log("data",data);
//    })
// }).catch(()=>{

//    console.log("b",b);

// });


/*fetch('https://dummyjson.com/image/400x200/008080/ffffff?text=Hello+Peter')
  .then(response => response.blob()) // Convert response to blob
  .then(blob => {
    console.log('Fetched image blob:', blob);

    // Create an object URL from the blob
    const imageUrl = URL.createObjectURL(blob);
 console.log(imageUrl,blob)
    // Create an img element and set the src
    const img = document.createElement('img');
    img.src = imageUrl;
   // img.setAttribute('src', imageUrl)
    img.alt = 'Fetched Image';
    document.body.appendChild(img);
  })
  .catch(error => console.error('Error fetching image:', error));


-------------------------------------------
#########destructuring of object
  const obj={
   name:'likhilesh',
   city:'Delhi',
   // country:null,
   // country:undefined,
   country:"IN"
}

const {city,country='india'}=obj;

console.log(city,country);
*/

const getdata = (e) => {
   const profile = e.target.value.trim(); // Get input value
   fetch(`https://api.github.com/users/${profile}`)
     .then((response) => {
       if (!response.ok) {
         throw new Error(`User not found (HTTP ${response.status})`);
       }
       return response.json();
     })
     .then((data) => {
       console.log('Fetched data:', data);
       showUI(data);
     })
     .catch((error) => {
       console.error('Error fetching data:', error);
     });
 };

 // Attach event listener to an input field
 document.getElementById('usernameInput').addEventListener('change', getdata);
 
 function showUI(data) {
   console.log('User data:', data);
 
   // Extract necessary properties
   const { avatar_url, login, html_url } = data;
 
   // Get the card element
   const card = document.getElementById('card');
   if (!card) {
     console.error("Element with id 'card' not found.");
     return;
   }
   // Populate the card with user data
   card.innerHTML = `
     <h4>${login.toUpperCase()}</h4>
     <img src='${avatar_url}' alt='avatar' width='100' height='100'>
     <a href='${html_url}' target='_blank'>View Profile</a>
   `;
   storedata(data);
 }
   function storedata(data){
    const olddata=localStorage.getItem('searches');
      const arr=JSON.parse(olddata);
      arr.push(data);
      localStorage.setItem("searches",JSON.stringify(data));//key value
   }


  function showhistory(){
   const olddata=localStorage.getItem('searches');
   const arr=JSON.parse(olddata || "[]");
   arr.forEach((data)=>{
     showUI(data);
   })
   }

   showhistory();



