function addTask(){
    var task = document.getElementById('textContainer').value;
    if(task == ""){
        alert('task cannot be empty');
        return false
    }
    var existingTask = document.getElementById(task)
        if(existingTask){
            alert('This task is already present')
            return false;
        }
    var list = document.getElementById('Tasklist');
    var li = document.createElement('li');
    li.setAttribute('class','listItem')
    li.setAttribute('id',task);
    li.appendChild(document.createTextNode(task));
    list.appendChild(li);
}
function deleteTask(){
    var task = document.getElementById('textContainer').value;
    if(task == ""){
        alert('task cannot be empty');
        return false
    }
    var list = document.getElementById('Tasklist');
    var existingTask = document.getElementById(task);
    if(!existingTask){
        alert('This task is not present')
        return false;
    }
    list.removeChild(existingTask);
}