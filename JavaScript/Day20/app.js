// const sum = (a,b) => {
//     console.log(a+b);
// };

// sum(34,24);


// const cube = (n) =>{
//     return n*n*n;
// }

// console.log(cube(4));

// let mul = (a,b) => a*b;
// console.log(mul(4,54));


// console.log("hi there.");

// setTimeout(()=>{console.log("apna college")}, 4000);

// console.log("Welcome to")


// const student = {
//     name: "aman", 
//     marks: 95,
//     prop: this,
//     getName: function (){
//         console.log(this);
//         return this.name;
//     }
// }

// console.log(student.getName())


// let id = setInterval(()=>{
//     console.log("hello world")
// }, 2000);

// setTimeout(()=>{
//     clearInterval(id)
// }, 10000);


// Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.

// let array = [4,4,45,34];
// let arrAvg = (array) => {
//     let avg = 0;
//     for(let i=0; i<array.length; i++){
//         avg = avg+array[i];
//     }
//     avg = avg/array.length;
//     return avg;
// }

// console.log(arrAvg(array));


// Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not.

// const isEven = (num) => num%2 ==0;
// console.log(isEven(5))

let student = {
    name: "Karan",
    age: 20
};

student.city = "Patna";

let key = "name";

console.log(student);