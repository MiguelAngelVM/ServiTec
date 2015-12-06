var clickAgregar = function(){

    var registro = $("#registro");
    var divView = $("#divView");
   
    divView.empty();
    divView.append("<center><input id='nombre' type='text' placeholder='Nombre' /><p id='pNombre'></p></center>"+"<input id='apellido' type='text' placeholder='Apellido' />"+"<input id='domicilio' type='text' placeholder='Domicilio' />"+"<input id='correo' type='text' placeholder='Correo' />"+"<input id='colonia' type='text' placeholder='Colonia' />"+"<input id='telefono' type='number' placeholder='Telefono' />"+"<input id='usuario' type='text' placeholder='Usuario' />"+"<input id='pass' type='text' placeholder='Contraseña' />"+"<input id='agregar' type='submit' placeholder='Agregar' class='button-submit-comment'/>");
    $("#agregar").click(function(){
        aceptacion();
    });
 }; 


var aceptacion = function(){
    var nombre = $("#nombre").val().trim();
    var apellido = $("#apellido").val().trim();
    var domicilio = $("#domicilio").val().trim();
    var correo = $("#correo").val().trim();
    var colonia = $("#colonia").val().trim();
    var telefono = $("#telefono").val().trim();
    var usuario = $("#usuario").val().trim();
    var contra= $("#pass").val().trim();
    if(nombre=="" && apellido=="" && domicilio=="" && correo==""
      && colonia=="" && telefono=="" && usuario=="" && contra==""){
            alert("Ingrese Los datos completos");
        }
    else
        { 
            
            if(nombre != "" && apellido != "" && domicilio != "" && correo != "" && colonia != "" && telefono != "" && usuario != "" && contra != "")
            {
                
                var url = "http://localhost/ServiTec/php/insercion/ingresar.php";
                var params = {
                    nombre : nombre,
                    apellido: apellido,
                    domicilio : domicilio,
                    correo : correo,
                    colonia : colonia,
                    telefono : telefono,
                    usuario : usuario,
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
	$("#registro").click(function() {
		clickAgregar();
	});
});