//Array

const arr=["fruits","Hello",24];

console.log(arr);
console.log(arr.length);

const obj={
    1:"fruits",
    2:"Hello",
    3:24   };
console.log(obj);

arr.push("rakesh");
console.log(arr);
console.log(arr.length)

console.log(arr[4])

//how to update
arr[4]="kumar";
console.log(arr[4]);

// these add an element that is greater to length create s hole in the array
//arr[7]="kumar";

delete arr[2];
console.log(arr);
