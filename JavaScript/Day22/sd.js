let Person = {
    name: "bmw",
    model:"top model",
    color:"black"
};

Person.color = "red";
Person.country = "india";


function dice(){
    let dic = Math.floor(Math.random()*6)+1;
    console.log(dic);
};
dice();