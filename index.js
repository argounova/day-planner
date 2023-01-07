let allTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let currentTime = moment().format("H");
let today = moment();
let contactForm = document.getElementById('contact-form');

$('#currentDate').text(today.format('Do MMMM YYYY'));
$('.offcanvas-title').text(today.format('dddd, H:mm a'));
$('.btn-sendFormOK').on('click', function() {
    location.reload();
});

$(document).ready(function(){

    function handleScheduler(){
        $('.content').each(function() {
            let timeBlock = parseInt($(this).attr('id').split('block')[1]);

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

    function handleContactSubmit(e) {
        e.preventDefault();
        emailjs.init('ZElOBNy_cU2ZofiP0');
        console.log(this);
        this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('service_peaz7nq', 'contact_formPasswordGen', this)
          .then(function(response) {
            $('#sendFormSucceed').modal('show');
            console.log('Email sent', response.status, response.text);
          }, function(error) {
            $('sendFormFail').modal('show');
            console.log('Email failed to send...', error);
          });
      }

    $('#block9').text(localStorage.getItem('block9'));
    $('#block10').text(localStorage.getItem('block10'));
    $('#block11').text(localStorage.getItem('block11'));
    $('#block12').text(localStorage.getItem('block12'));
    $('#block13').text(localStorage.getItem('block13'));
    $('#block14').text(localStorage.getItem('block14'));
    $('#block15').text(localStorage.getItem('block15'));
    $('#block16').text(localStorage.getItem('block16'));
    $('#block17').text(localStorage.getItem('block17'));

    $('.saveBtn').on('click', function() {
        let text = $(this).siblings('.content').val();
        let time = $(this).siblings('.content').attr('id');
        localStorage.setItem(time, text);
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
    contactForm.addEventListener('submit', handleContactSubmit);
});