$(document).ready(function() {
                  
$('#playerinputs').on('click','.remove',function(){
    $(this).parent().remove();
});


$('#addplayer').click(function(){
    $('#playerinputs').append('<li><input maxlength="10" type="text" class="form"><i class="fa fa-times remove" aria-hidden="true"></i></li>');
});
                  
                  
$('#create').click(function(){
    $('#form_container').slideUp(200);
    $.getScript('http://localhost:8000/index_files/fbsqaures.js');

});
                  
});