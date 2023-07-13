var taskInput=document.getElementById('taskInput');
var addButton=document.getElementById('addButton');
var taskList=document.getElementById('taskList');

//function to add task
function addTask(){
    var taskText=taskInput.value;

    if(taskText!==''){
        var newTask=document.createElement('li');
        newTask.innerHTML=taskText;
        newTask.addEventListener('click',toggleTask);
        taskList.appendChild(newTask);
        taskInput.value="";
    }
}

//Identify completed task and active task
function toggleTask(){
    this.classList.toggle('completed');
}

//adding eventlistener to add button
addButton.addEventListener('click',addTask);