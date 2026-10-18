let inp = document.querySelector("#input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let search = document.querySelector("#search");

btn.addEventListener("click", addTask);
inp.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});

function taskExists(taskName){
    let allTasks = document.querySelectorAll("li");

    for(let task of allTasks){
      if(task.firstChild.textContent.trim() === taskName){
        return true;
      }
    }
    return false;
  }



function addTask() {
  let li = document.createElement("li");
  let delbtn = document.createElement("button");
  let edit = document.createElement("button");
  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  
  let duplicate = taskExists(inp.value);
  console.log("duplicate :", duplicate);
  
  
  
  if (inp.value.trim() === "") {
    return;
  }


  if(duplicate){
    alert("This task already exists");
    return;
  }

  //create new task
  li.innerText = inp.value;

  //delete button
  delbtn.innerText = "X";
  edit.innerText = "Edit";
  
  li.prepend(checkbox);
  li.appendChild(delbtn);
  li.appendChild(edit);
  ul.appendChild(li);
  console.log(ul.innerHTML);

  //Search element


  //Delete task
  delbtn.addEventListener("click", function () {
    li.remove();
  });

  // edit task
  edit.addEventListener("click", function(){
    let editedTask = prompt(`edit`);
    let duplicate = taskExists(editedTask);

    if(editedTask === null){
      return;
    }

    editedTask = editedTask.trim();

    if(editedTask === ""){
      alert("Task cannot be empty.");
      return;
    }

    if(duplicate){
    alert("This task already exists");
    return;
  }

    li.firstChild.textContent = editedTask;
    console.log(li)
  })

  checkbox.addEventListener("change", function(){
    if(checkbox.checked){
      li.classList.add("completed");
    }
    else{
      li.classList.remove("completed");
    }
  })

  //Clear input
  inp.value = "";
}


search.addEventListener("input", function(){
    let allTasks = document.querySelectorAll("li");
    
    let searchText = search.value.toLowerCase().trim();

    for(let task of allTasks){
      let taskText = task.firstChild.textContent.toLowerCase();
      if(taskText.includes(searchText)){
          task.style.display = "";
        }
        else{
          task.style.display = "none";
        }
      
    }
  })