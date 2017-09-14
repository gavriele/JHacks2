var data = {
    name: $("#form_name").val(),
    email: $("#form_email").val(),
    message: $("#msg_text").val()
};
$.ajax({
    type: "POST",
    url: "mailer.php",
    data: data,
    success: function(){
        $('.success').fadeIn(1000);
    }
});