document.addEventListener("DOMContentLoaded", function() {
   const itemInput = document.getElementById("itemInput");
   const dataForm = document.getElementById("dataForm");
   const itemList = document.getElementById("itemList");
   const filter = document.getElementById("filter");

   // Load items from localStorage
   function loadItems(selectedItem = "") {
       const items = JSON.parse(localStorage.getItem("items")) || [];
       itemList.innerHTML = "";
       filter.innerHTML = `<option value="">Show All</option>`;
       
       items.forEach((item, index) => {
           addItemToFilter(item);
           if (!selectedItem || item === selectedItem) {
               addItemToDOM(item, index);
           }
       });}
   // Add item to DOM
   function addItemToDOM(item, index) {
       const li = document.createElement("li");
       li.innerHTML = `${item} <button onclick="deleteItem(${index})">Delete</button>`;
       itemList.appendChild(li);
   }

   // Add item to filter dropdown
   function addItemToFilter(item) {
       const option = document.createElement("option");
       option.value = item;
       option.textContent = item;
       filter.appendChild(option);
   }

   // Add new item
   dataForm.addEventListener("submit", function(event) {
       event.preventDefault();
       const newItem = itemInput.value.trim();
       if (!newItem) return;

       const items = JSON.parse(localStorage.getItem("items")) || [];
       items.push(newItem);
       localStorage.setItem("items", JSON.stringify(items));

       loadItems();
       itemInput.value = "";
   });

   // Delete item
   window.deleteItem = function(index) {
       let items = JSON.parse(localStorage.getItem("items")) || [];
       items.splice(index, 1);
       localStorage.setItem("items", JSON.stringify(items));

       loadItems();
   };

   // Filter items based on selection
   filter.addEventListener("change", function() {
       loadItems(filter.value);
   });

   loadItems();
});
