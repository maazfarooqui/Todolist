let delbuttonlist = [];

let calender = document.querySelector(".calender")
let taskinput = document.querySelector(".taskInput")
let addtask = document.querySelector(".addTask")

let tasklist = document.querySelector(".taskList")


let id =0;


//to hande the deletion of tasks
tasklist.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});


//to add tasks to the list
addtask.addEventListener("click", function () { 
    let date = calender.value;
    let task = taskinput.value;

    if (!task || !date) 
        {alert("Please enter both task and date");
     return;}

    tasklist.innerHTML += `<li class="listfromjs"> <div style="width:150px;">${task}</div>   <div> ${date}</div>  <button id=${id}  class="delete">Delete</button> </li>`;
    let delbutton = document.getElementById(id);


    
    
})









