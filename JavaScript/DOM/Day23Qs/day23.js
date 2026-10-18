let button = document.querySelector("button");
let p = document.querySelector("p");

button.addEventListener("mouseout", function(){
    console.log("mouse out from button");
});

button.addEventListener("click", function(){
    button.style.color = "green";
})

let inp = document.querySelector("input");

inp.addEventListener("keypress", function(){
    console.log("key pressed");
    p.innerText = inp.value;
})

p.addEventListener("scroll", function(){
    console.log("paragraph got scrolled.")
})

window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});


let h2 = document.querySelector("h2");
let inps = document.querySelector("#inp");

inps.addEventListener("keypress",function(){
    h2.innerText = inps.value;
})