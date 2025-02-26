//Object
/* const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

// Accessing object properties
console.log(obj.name); // John
console.log(obj.age); // 30
console.log(obj.city); // New York */
// Repeated ley will override the value
/* const obj = {
    name: "John",
    name: "raj",
    age: 30,
    city: "New York"
};

// Accessing object properties
    console.log(obj); */

// How to access the value of object properties
const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(obj);
console.log(obj.name); // John

//How to add a  key value pair in object
obj.country="India";

console.log(obj.country);

// if you are trying to access a key that does not exist in the object, it will return undefined.   
//console.log(object.address); // undefined

// Access the value dynamically

//const key='city';
/* const key= prompt("Enter the key");
console.log(obj[key]); // New York */

obj.city="Mumbai";
console.log(obj);

//How to delete a key value pair from object
const key= prompt("Enter the key to delete");
delete obj.key;
console.log(obj);

//How to check if a key exists in an object
