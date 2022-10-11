var task = [];

$(document).ready(function(){

function init(){
    var storedTask = JSON.parse(window.localStorage.getItem('task'));
    if (storedTask!== null) {
        task = storedTask;
      }
}

function storeTasks(){
    localStorage.setItem("task", JSON.stringify(task));
}

$('#saveBtn').click(function(){
    var text = $('#task').val();
    if (text === ""){
        return;
    }
    task.push(text);
    // text.value = "";
    console.log(text);
    alert("Task Saved!");
    storeTasks();
});

init();

});

