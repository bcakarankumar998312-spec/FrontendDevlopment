// // async function greet(){
// //     throw "404 page not found"
// //     return "hello";
// // }

// // greet().then((result)=>{
// //     console.log("Promise was successful");
// //     console.log("result was : ",result)
// // })

// // .catch((err)=>{
// //     console.log("promise was rejected with err : ", err);
// // })

// // let  demo = async () =>{
// //     return 5;
// // }

// // function getNum() {
// //   return new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       let num = Math.floor(Math.random() * 10) + 1;
// //       console.log(num);
// //       resolve();
// //     }, 1000);
// //   });
// // }

// // async function demo() {
// //   await getNum();
// //   getNum();
// //   getNum();
// // }


// let btn = document.querySelector("button");
// let url2 ="https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async ()=>{
//   let link = await getImage();
//   let img = document.querySelector("#result");
//   img.setAttribute("src", link);
// } );




// async function getImage(){
//   try {
//     let res = await axios.get(url2);
//     return res.data.message;
//   }
//   catch(e){
//     console.log("error - ",e);
//     return "No image found";
//   }
  
// }


let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async() =>{
  let country = document.querySelector("input").value;
  console.log(country);
  let colleges = await getColleges(country);
  show(colleges);
})

function show(colleges){
  let list = document.querySelector("#list");
  list.innerText = "";
  for(col of colleges){
    console.log(col.name);
    let li = document.createElement("li");
    li.innerText = col.state;
    list.appendChild(li);
  }
}


async function getColleges(country) {
  try {
    let res = await axios.get(url+country);
    return res.data;
  }
  catch(e){
    console.log("error - ",e);
  }
}

















