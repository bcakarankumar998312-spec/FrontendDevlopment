// // // let arr = [
// // //     {
// // //         name: "aman",
// // //         marks: 95
// // //     },
// // //     {
// // //         name: "rahul",
// // //         marks: 45
// // //     },
// // //     {
// // //         name: "shradha",
// // //         marks: 90
// // //     }
// // // ];

// // // let gpa = arr.map((el) => {
// // //     return el.marks / 10;
// // // });


// // // let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12,11];
// // // let ans = nums.filter((el)=> {
// // //     return el<5;
// // // })

// // // let nums = [1, 2, 3, 4];
// // // let finalVal = nums.reduce((res, el)=> {
// // //     console.log(res);
// // //     return res+el;
// // // });

// // // console.log(finalVal);

// // // let nums = [1, 2, 13,3, 4, 7, 8, 2, 9, 10, 12,11,14];
// // // let max = nums.reduce((max, el) => {
// // //     if(max < el){
// // //         return el;
// // //     }
// // //     else{
// // //         return max;
// // //     }
// // // });

// // // console.log(max)

// // //Check if all numbers in our array are multiples of  10 or not.

// // // let num = [10,20,30];
// // // let ans = num.every((el)=> el%10==0);

// // // console.log(ans)

// // // Create a function to find the min number in an array.

// // // let nums = [1, 2, -13,3, 4, 7, 8, 2, 9, 10, 12,11,14];
// // // let min = nums.reduce((min, el) =>{
// // //     if(min < el){
// // //         return min;
// // //     }
// // //     else {
// // //         return el;
// // //     }
// // // });

// // // console.log(min);
// // // console.log(...nums);

// // // let arr = [..."hello my name is karan"];
// // // console.log(arr)

// // // const data = {
// // //     email: "ironman@gmail.com",
// // //     password: "abcd",
// // // };

// // // const dataCopy = {...data, id:123,country:'India'};
// // // console.log(dataCopy);

// // // let arr = [1, 2, 3, 4, 5];
// // // let obj1 = {...arr};

// // // console.log(obj1);

// // function sum(...args){
// //     //arguments
// //     for(let i=0; i<args.length; i++){
// //         console.log("you gave us: ", args[i]);
// //     }
// // }

// // function min(a, b, c, d){
// //         console.log(arguments.length);
// //     }

    

// // let names = ["tony", "peter", "steve", "s", "s", "g"];
// // // let winner = names[0];
// // // let runnerup =names[1];
// // // let secondRunnerup = names[2];

// // let [winner, runnerup, secondRunnerup, ...oth] = names;


// // const student = {
// //     name: "karan",
// //     age: 14,
// //     class:9,
// //     subjects: ["hindi", "english", "math", "science"],
    
// //     password: "abcd"
// // }

// // let { username="rahul", password } = student;

// //Square and sum the array elements using the arrow function and then find the avarage of the array.

// let arr = [1,2,3,4];

// let Square = arr.reduce((res,val)=>res+(val * val));
// console.log(Square);

// let nums = [1,2,3,4];

// const Square = nums.map((num) => num*num);
// console.log(Square);

// let sum = Square.reduce((acc,cur) => acc + cur, 0);

// let avg = sum/nums.length;
// console.log(avg);

//Create a new array using the map function whose each element is equal to the original element plus 5.

// let nums = [1,2,3,4];

// let newNums = nums.map((news) => news+5);

// console.log(newNums);

//Create a new array whose elements are in uppercase of words present in the original array.

// let words = ["apple", "milk", "bread"];

// let newWords = words.map((word)=> word.toUpperCase())
// console.log(newWords)

//Write a function called doucleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled.

// const doubleAndReturns = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v*2),

// ];

// let result1= doubleAndReturns([1,2,3],4,4);
// console.log(result1)
// let result2 =doubleAndReturns([2], 10, 4);
// console.log(result2)


// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

function mergeObjects(obj1, obj2){
   let obj3 = {...obj1, ...obj2};
   return obj3;
}

let obj1 = {
    name:"karan",
    rollno:34

}

let obj2 = {
    year:23423,
    class:3
}

console.log(mergeObjects(obj1, obj2))

