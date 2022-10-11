// var task = [];

$(document).ready(function(){

function init(){
    var storedTask = localStorage.getItem('task9am');
    $('#task9am').text(storedTask);
    storedTask = localStorage.getItem('task10am');
    $('#task10am').text(storedTask);
    storedTask = localStorage.getItem('task11am');
    $('#task11am').text(storedTask);
    storedTask = localStorage.getItem('task12pm');
    $('#task12pm').text(storedTask);
    storedTask = localStorage.getItem('task1pm');
    $('#task1pm').text(storedTask);
    storedTask = localStorage.getItem('task2pm');
    $('#task2pm').text(storedTask);
    storedTask = localStorage.getItem('task3pm');
    $('#task3pm').text(storedTask);
    storedTask = localStorage.getItem('task4pm');
    $('#task4pm').text(storedTask);
    storedTask = localStorage.getItem('task5pm');
    $('#task5pm').text(storedTask);
}

$('#btn9am').click(function(){
    var text = $('#task9am').val();
    alert("9:00 AM Task Saved!");
    localStorage.setItem("task9am", text);
});

$('#btn10am').click(function(){
    var text = $('#task10am').val();
    alert("10:00 AM Task Saved!");
    localStorage.setItem("task10am", text);
});

$('#btn11am').click(function(){
    var text = $('#task11am').val();
    alert("11:00 AM Task Saved!");
    localStorage.setItem("task11am", text);
});

$('#btn12pm').click(function(){
    var text = $('#task12pm').val();
    alert("12:00 PM Task Saved!");
    localStorage.setItem("task12pm", text);
});

$('#btn1pm').click(function(){
    var text = $('#task1pm').val();
    alert("1:00 PM Task Saved!");
    localStorage.setItem("task1pm", text);
});

$('#btn2pm').click(function(){
    var text = $('#task2pm').val();
    alert("2:00 PM Task Saved!");
    localStorage.setItem("task2pm", text);
});

$('#btn3pm').click(function(){
    var text = $('#task3pm').val();
    alert("3:00 PM Task Saved!");
    localStorage.setItem("task3pm", text);
});

$('#btn4pm').click(function(){
    var text = $('#task4pm').val();
    alert("4:00 PM Task Saved!");
    localStorage.setItem("task4pm", text);
});

$('#btn5pm').click(function(){
    var text = $('#task5pm').val();
    alert("What are you doing?! It's 5 o'clock!");
    localStorage.setItem("task5pm", text);
});

$('#clearAll').click(function(){
    if (confirm("Are you sure you want to delete all tasks?")) {
        localStorage.clear();
        alert("All tasks have been deleted");
        location.reload();
    } else {
        return;
    }
});

init();

});

