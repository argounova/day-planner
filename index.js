let allTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let currentTime = moment().format("H");
let today = moment();
$('#currentDay').text(today.format('dddd, MMM Do'));

$(document).ready(function(){

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

    $('.saveBtn').on('click', function() {
        let eventText = $(this).siblings('.event-text').val();
        let eventTime = $(this).siblings().attr('id');
        console.log(eventText);
        console.log(eventTime);
        localStorage.setItem(eventTime, eventText);
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