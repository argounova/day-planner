let allTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var time9am = 09;
var time10am = 10;
var time11am = 11;
var time12pm = 12;
var time1pm = 13;
var time2pm = 14;
var time3pm = 15;
var time4pm = 16;
var time5pm = 17;

$(document).ready(function(){

var today = moment();
$('#currentDay').text(today.format('dddd, MMM Do'));

let currentTime = moment().format("H");

function handleScheduler(){
    $('.col-10').each(function() {
        let timeBlock = parseInt($(this).attr('id').split('time')[1]);

        if (timeBlock == currentTime) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        } else if (timeBlock < currentTime) {
            $(this).removeClass('present');
            $(this).removeClass('future');
            $(this).addClass('past');
        } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');

        }
    });
}

$('#task9am').text(localStorage.getItem('task9am'));
$('#task10am').text(localStorage.getItem('task10am'));
$('#task11am').text(localStorage.getItem('task11am'));
$('#task12pm').text(localStorage.getItem('task12pm'));
$('#task1pm').text(localStorage.getItem('task1pm'));
$('#task2pm').text(localStorage.getItem('task2pm'));
$('#task3pm').text(localStorage.getItem('task3pm'));
$('#task4pm').text(localStorage.getItem('task4pm'));
$('#task5pm').text(localStorage.getItem('task5pm'));

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

handleScheduler();

});

