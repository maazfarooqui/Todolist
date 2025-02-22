let delbuttonlist = [];

let calender = document.querySelectorAll(".calender")
let taskinput = document.querySelectorAll(".taskInput")
let addtasks = document.querySelectorAll(".addTask")

console.log(addtasks);
console.log(calender);
console.log(taskinput);

let tasklist = document.querySelector(".taskList")


let id =0;


//to hande the deletion of tasks
tasklist.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    }
});

addtasks.forEach((addtask, i)=>{
    addtask.addEventListener("click", function () { 
        let date = calender[i].value;
        let task = taskinput[i].value;
    
        if (!task || !date) 
            {alert("Please enter both task and date");
         return;}
    
        tasklist.innerHTML += `<li class="listfromjs"> <div style="width:150px;">${task}</div>   <div> ${date}</div>  <button id=${id}  class="delete">Delete</button> </li>`;
       

        
    })
    
})




//to add tasks to the list









