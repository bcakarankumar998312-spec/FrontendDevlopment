
let body = document.querySelector("body");

let input = document.createElement("input");
input.placeholder = "username";
body.appendChild(input);
let button = document.createElement("button");
button.innerText = "click me";
body.appendChild(button);
button.id="btn";

let btn = document.querySelector("#btn");


let h1 = document.createElement("h1");
body.appendChild(h1);
h1.id = "h1";
h1.innerText = "Dom Practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";

let para = document.createElement("p");
body.appendChild(para);
para.innerHTML = "Apna College <b>Delta</b> Practice";


