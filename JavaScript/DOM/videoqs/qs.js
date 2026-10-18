
let para1 = document.createElement("p");
let para2 = document.createElement("p");
let h3 = document.createElement("h3");
let h1 = document.createElement("h1");
let div = document.createElement("div");
let body = document.querySelector("body");

para1.innerText = "Hey I'm red!";


body.appendChild(para1);
para1.classList.add("red");

h3.innerText = "I'm a blue h3!";
h3.classList.add("blue");
body.appendChild(h3);




body.appendChild(div);
div.classList.add("box");


h1.innerText = "I'm in a div";

div.appendChild(h1);
para2.innerText = "Me too!";

div.appendChild(para2);

