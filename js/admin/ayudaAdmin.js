var loaded = function (){
ayuda();
};

var ayuda = function(){
    $("#ayuda").on("click",function(){
       var mostrarImput = $("#Login");
        $("#newImputAyuda").remove();
        $("#imputBuscar").remove();
        $("#imputx").remove();
        mostrarImput.append("<input type='text' list='search' placeholder='Buscar ayuda' id='newImputAyuda'>" + 
                            "<datalist id='search'>" +
                            "<option >" + "¿Cómo agregar un empleado?" +  
                            "<option >" + "¿Cómo eliminar un empleado?" + 
                            "<option >" + "¿Cómo agregar un cliente?" + 
                            "<option >" + "¿Cómo eliminar un cliente?" + 
                            "<option >" + "¿Cómo agregar un producto?" +
                            "<option >" + "¿Cómo eliminar un producto?" +
                            "<option >" + "¿Cómo enviar un mensaje a un cliente?" +
                            "<option >" + "¿Cómo ver la información de un cliente?" +
                            "<option >" + "¿Cómo actualizar el estado de un aparato?" +
                            "<option >" + "¿Cómo buscar un aparato?" +
                            "<option >" + "¿Cómo ver notificaciones?" +
                            "<option >" + "¿Cómo ver los aparatos a reparar?" +
                            "<option >" + "¿Cómo ver reportes de ingreso?" +
                            "<option >" + "¿Cómo ver reportes de aparatos?" +

                            "</datalist>" +
                            
                            
                            
                            /////////////////////////////////////
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
            if (inputAyuda == "¿Cómo agregar un empleado?" ){
        
                /////////////////////muesta el texo de ayuda///////////////////////////////7
                
                var mostrarAyuda = $("#respuesta");
                
                    $("#textoAyuda").empty();
                    mostrarAyuda.append(
                        "<input type='submit' value='x' id='imputXAyuda'>" +
                        "<p id='textoAyuda'>" + "Necesitas acceder a la sección de PERSONAL, donde le darás click a, Agregar un empleado, te aparecerán los campos, nombre, apellido, domicilio, correo, colonia, teléfono, usuario y contraseña. Se llenaran los campos respecto a los datos del empleado." +
                                        
                                        "</p>" 
                                     
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
////////////////////////iNICIO DE PREGUNTA///////////////////////////////////////////////////////////////////////////////////////
            
            
                if (inputAyuda == "¿Cómo eliminar un empleado?" ){
        
                /////////////////////muesta el texo de ayuda///////////////////////////////7
                
                var mostrarAyuda = $("#respuesta");
                
                    $("#textoAyuda").empty();
                    mostrarAyuda.append(
                        "<input type='submit' value='x' id='imputXAyuda'>" +
                        "<p id='textoAyuda'>" + "Necesitas acceder a la sección PERSONAL, donde le darás clikc a, Empleados, te aparecerá una lista con todos los empleados, solo tienes que darle click a la X y te mostrara un cuadrado donde te pregunta si estás seguro que quieres eliminar al empleado, si de verdad estas seguro le das click en el recuadro que dice si, y el empleado se eliminara NOTA (una vez eliminado el empleado no se pueden recuperar sus datos)" +
                                        
                                        "</p>" 
                                     
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
/////////////////////inicio de pregunta////////////////////////////////////////////////////////////////////
                 if (inputAyuda == "¿Cómo agregar un cliente?" ){
        
                /////////////////////muesta el texo de ayuda///////////////////////////////7
                
                var mostrarAyuda = $("#respuesta");
                
                    $("#textoAyuda").empty();
                    mostrarAyuda.append(
                        "<input type='submit' value='x' id='imputXAyuda'>" +
                        "<p id='textoAyuda'>" + "Necesitas acceder a la opción agregar cliente, te aparecerán los campos, nombre, apellido, domicilio, correo, colonia, teléfono, usuario y contraseña. Se llenaran los campos respecto a los datos del cliente. NOTA (usted le asigna el nombre  y la contraseña al cliente, pero él puede cambiar sus datos personales si así lo desea)." +
                                        
                                        "</p>" 
                                     
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
                
            //////////////////////////////////////////fin de pregunta//////////////////////////////////////////////////
            /////////////////////inicio de pregunta////////////////////////////////////////////////////////////////////
                 if (inputAyuda == "¿Cómo eliminar un cliente?" ){
        
                /////////////////////muesta el texo de ayuda///////////////////////////////7
                
                var mostrarAyuda = $("#respuesta");
                
                    $("#textoAyuda").empty();
                    mostrarAyuda.append(
                        "<input type='submit' value='x' id='imputXAyuda'>" +
                        "<p id='textoAyuda'>" + "Necesitas acceder a la sección Cliente, donde le darás clikc a, Clientes, te aparecerá una lista con todos los clientes, solo tienes que darle click a la X y te mostrara un cuadrado donde te pregunta si estás seguro que quieres eliminar al cliente, si de verdad estas seguro le das click en sí. NOTA (una vez eliminado el cliente, sus datos no se podrán recuperar)." +
                                        
                                        "</p>" 
                                     
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
                
            //////////////////////////////////////////fin de pregunta//////////////////////////////////////////////////

                 /////////////////////inicio de pregunta////////////////////////////////////////////////////////////////////
                 if (inputAyuda == "¿Cómo agregar un producto?" ){
        
                /////////////////////muesta el texo de ayuda///////////////////////////////7
                
                var mostrarAyuda = $("#respuesta");
                
                    $("#textoAyuda").empty();
                    mostrarAyuda.append(
                        "<input type='submit' value='x' id='imputXAyuda'>" +
                        "<p id='textoAyuda'>" + "Necesitas acceder a la opción agregar cliente, te aparecerán los campos, nombre, apellido, domicilio, correo, colonia, teléfono, usuario y contraseña. Se llenaran los campos respecto a los datos del cliente. Si el cliente ya está agregado, al darle entre al campo apellido automáticamente te aparecerá una ventara para agregar producto al cliente." +
                                        
                                        "</p>" 
                                     
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
                
            //////////////////////////////////////////fin de pregunta//////////////////////////////////////////////////

/////////////////////inicio de pregunta////////////////////////////////////////////////////////////////////
                 if (inputAyuda == "¿Cómo eliminar un producto?" ){
        
                /////////////////////muesta el texo de ayuda///////////////////////////////7
                
                var mostrarAyuda = $("#respuesta");
                
                    $("#textoAyuda").empty();
                    mostrarAyuda.append(
                        "<input type='submit' value='x' id='imputXAyuda'>" +
                        "<p id='textoAyuda'>" + "Necesitas acceder a la sección Producto, donde le darás clikc a, productos, te aparecerá una lista con todos los productos, solo tienes que darle click a la X y te mostrara un cuadrado donde te pregunta si estás seguro que quieres eliminar el producto, si de verdad estas seguro, le das click en sí. NOTA (una vez eliminado el producto, sus datos no se podrán recuperar)." +
                                        
                                        "</p>" 
                                     
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
                
            //////////////////////////////////////////fin de pregunta//////////////////////////////////////////////////

/////////////////////inicio de pregunta////////////////////////////////////////////////////////////////////
                 if (inputAyuda == "¿Cómo enviar un mensaje a un cliente?" ){
        
                /////////////////////muesta el texo de ayuda///////////////////////////////7
                
                var mostrarAyuda = $("#respuesta");
                
                    $("#textoAyuda").empty();
                    mostrarAyuda.append(
                        "<input type='submit' value='x' id='imputXAyuda'>" +
                        "<p id='textoAyuda'>" + "Necesitas acceder a la sección Producto, donde le darás clikc a, productos, te aparecerá una lista con todos los productos, solo tienes que darle click a la X y te mostrara un cuadrado donde te pregunta si estás seguro que quieres eliminar el producto, si de verdad estas seguro, le das click en sí. NOTA (una vez eliminado el producto, sus datos no se podrán recuperar)." +
                                        
                                        "</p>" 
                                     
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
                
            //////////////////////////////////////////fin de pregunta//////////////////////////////////////////////////

                
                
            
            
            
            }
             else
                {
                alert("necesitas escrivir algo, o darle clik a la X si no deceas buscar nada");
                }
          
            ///////////////////////////////////////////////////////////////////////////////////////
        });   
    });
};
                                      


$(document).ready(loaded);