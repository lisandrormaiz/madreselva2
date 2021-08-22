$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // form inválido
        formError();
        enviarMsj(false, "Llenaste bien el formulario?");
    } else {
        // si está ok
        event.preventDefault();
        enviarForm();
    }
});


function enviarForm(){
    // Iniciar variables
    var nombre = $("#nombre").val();
    var email = $("#email").val();
    var mensaje = $("#mensaje").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "nombre=" + nombre + "&email=" + email + "&mensaje=" + mensaje,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                enviarMsj(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    enviarMsj(true, "Mensaje enviado!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function enviarMsj(valid, msg){
    if(valid){
        var msjClases = "h3 text-center tada animated text-success";
    } else {
        var msjClases = "h3 text-center text-danger";
    }
    $("#msjEnv").removeClass().addClass(msjClases).text(msg);
}