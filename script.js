$(document).ready(function(){

$('#btn9').click(function(){
    var text = $('#event9').val();
    localStorage.setItem("Event", JSON.stringify(text));
    console.log(text);
    alert("Event Saved!");
});

});