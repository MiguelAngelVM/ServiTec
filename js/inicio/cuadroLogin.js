var clickEntrar = function(){
	$("#contra").on("keydown",function(event){
         var tecla = event.keyCode || event.charCode;
         if (tecla==13){
            validacion();
         }
     });


    $("#entrar").click(function(){
    validacion();

    });
};

var validacion = function(){
    var user = $("#user").val().trim();
    var contra = $("#contra").val().trim();
    if(user==""&&contra==""){
            alert("Ingrese Usuario y contraseña");
        }
        else
        {
            if(user=="")
            {
                alert("Ingrese Usuario");
            }
            if(contra=="")
            {
                alert("Ingrese Contraseña");
            }
            if(user != "" && contra != "")
            {

                var url = "http://localhost/ServiTec/php/control/control.php";
                var params = {
                    usuario : user,
                    passw : contra
                };
                $.post(url, params).done(function(data){
                    var json = JSON.parse(data);
										if (json== "Usuario o Contraseña incorrecta"){
											alert(json);
										}else{
                     window.location.href = json;
										}

                });


            }
        }
};



$(document).ready(function(){
		clickEntrar();
});
