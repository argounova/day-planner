// var allTime = [09, 10, 11, 12, 13, 14, 15, 16, 17];
var time9am = 09;
var time10am = 10;
var time11am = 11;
var time12pm = 12;
var time1pm = 13;
var time2pm = 14;
var time3pm = 15;
var time4pm = 16;
var time5pm = 17;


var today = moment();
$('#currentDay').text(today.format('dddd, MMM Do'));

// This variable used to test the function compareTime
// var currentTime = 09;

var currentTime = moment().format("HH");

// function compareTime(){
//     for (var i = 0; i < allTime.length; i++) {
//     if (currentTime > allTime[i]){
//         $('div.col-10').addClass('past');
//     } else if (currentTime == allTime){
//         $('div.col-10').addClass('present');
//     } else {
//         $('div.col-10').addClass('future');
//     }
//     }
// }

function compareTime(){
    if (currentTime > time9am){
        $('#time9am').addClass('past');
    } else if (currentTime == time9am){
        $('#time9am').addClass('present');
    } else {
        $('#time9am').addClass('future');
    }
    if (currentTime > time10am){
        $('#time10am').addClass('past');
    } else if (currentTime == time10am){
        $('#time10am').addClass('present');
    } else {
        $('#time10am').addClass('future');
    }
    if (currentTime > time11am){
        $('#time11am').addClass('past');
    } else if (currentTime == time11am){
        $('#time11am').addClass('present');
    } else {
        $('#time11am').addClass('future');
    }
    if (currentTime > time12pm){
        $('#time12pm').addClass('past');
    } else if (currentTime == time12pm){
        $('#time12pm').addClass('present');
    } else {
        $('#time12pm').addClass('future');
    }
    if (currentTime > time1pm){
        $('#time1pm').addClass('past');
    } else if (currentTime == time1pm){
        $('#time1pm').addClass('present');
    } else {
        $('#time1pm').addClass('future');
    }
    if (currentTime > time2pm){
        $('#time2pm').addClass('past');
    } else if (currentTime == time2pm){
        $('#time2pm').addClass('present');
    } else {
        $('#time2pm').addClass('future');
    }
    if (currentTime > time3pm){
        $('#time3pm').addClass('past');
    } else if (currentTime == time3pm){
        $('#time3pm').addClass('present');
    } else {
        $('#time3pm').addClass('future');
    }
    if (currentTime > time4pm){
        $('#time4pm').addClass('past');
    } else if (currentTime == time4pm){
        $('#time4pm').addClass('present');
    } else {
        $('#time4pm').addClass('future');
    }
    if (currentTime > time5pm){
        $('#time5pm').addClass('past');
    } else if (currentTime == time5pm){
        $('#time5pm').addClass('present');
    } else {
        $('#time5pm').addClass('future');
    }
}
     
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
compareTime();

});

