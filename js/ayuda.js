var loaded = function (){
ayuda();

};
//////////////////Aparecer un imput/////////////////////////
var ayuda = function(){
    $("#ayuda").on("click",function(){
       var mostrarImput = $("#Login");
        $("#newImputAyuda").remove();
        $("#imputBuscar").remove();
        $("#imputx").remove();
        mostrarImput.append("<input type='text' list='search' placeholder='Buscar ayuda' id='newImputAyuda'>" + 
                            "<datalist id='search'>" +
                            "<option id='funciona'>" + "¿Cómo ingresar por medio de login? " +  
                            "</datalist>" +
                            "<input type='submit' value='buscar' id='imputBuscar'>"+
                            "<input type='submit' value='x' id='imputx'>"    );
        mostrarImput.addClass("imputAyuda")
        
        /////////////////////////Eliminar por si no quiere buscar nada/////////////////////////////////
           var eliminarTodonew = $("#Login");
                    $("#imputx").on("click",function(){
                         
                        
                         $("#imputBuscar").remove();
                         $("#imputx").remove();
                         $("#newImputAyuda").remove();
                    });
      ////////////////// verifica la pregunta ///////////////////////////////7
        
        // $("#newImputAyuda").clear();
        var  inputAyuda;
        $("#imputBuscar").on("click", function(){
            inputAyuda = $("#newImputAyuda").val().trim();
            if(inputAyuda != ""){
            
                  $("#respuesta").empty();
            if (inputAyuda == "¿Cómo ingresar por medio de login?" ){
        
                /////////////////////muesta el texo de ayuda///////////////////////////////7
                
                var mostrarAyuda = $("#respuesta");
                
                    $("#textoAyuda").empty();
                    mostrarAyuda.append("<p id='textoAyuda'>" + "<input type='submit' value='x' id='imputXAyuda'>" +
                                        "Necesitas darle click al botón Entrar, " +
                                        "<img src='img/ayuda/entrar.png'>" +                                         
                                        "</p>" +
                                        "<p>" + 
                                        "que está en la parte superior derecha de la página." + 
                                        "</p>" +
                                        "<p>" +
                                        "Te enviara a un cuadro donde dice Login, en el recuadro donde dice nombre y contraseña, ingresara el nombre y                                la contraseña que le dio el encargado del taller. "  +
                                        "</p>" +
                                        "<img src='img/ayuda/login.png'>"
                                        );
                            mostrarAyuda.addClass("respuesta");
                //////////////////////////////////////////////////////////////////////////////777
                
                var eliminarAyuda = $("#respuesta");
                    $("#imputXAyuda").on("click",function(){
                        mostrarAyuda.empty();
                    
                    });
                var eliminarTodo = $("#Login");
                    $("#imputx").on("click",function(){
                         
                         mostrarAyuda.empty();
                         $("#imputBuscar").remove();
                         $("#imputx").remove();
                         $("#newImputAyuda").remove();
                    });
            }
            
            }
             else
                {
                alert("necesitas escrivir algo, o darle clik a la X si no deceas buscar nada");
                }
          
        });   
    });
};
                                      


$(document).ready(loaded);