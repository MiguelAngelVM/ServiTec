var clickEntrar = function(){
	var divNew = $("#divNew");
    var login = $("#login");
   
    
    divNew.empty(login);
    divNew.append("<input id='user' type='text' placeholder='Usuario' />"+"<input id='contra'  type='password' placeholder='Contraseña'  />"+"<input id='entrar' type='submit' class='button-submit-comment'/>");
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
                     window.location.href = json;
                    
                    
                });
        
                
            }
        }
};



$(document).ready(function(){
	$("#login").click(function() {
		clickEntrar();
	});
});

