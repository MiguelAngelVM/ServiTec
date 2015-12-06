var jsonPersonalAsignado=[];
var jsonPersonalAsignadoViejo=[];
var jsonPersonalAsignadoNuevo=[];
var idUsuario;
var mostrarFolio = function(){
    var idUsuario = 0;
    var vista = $("#vistaAdminIndex");
    vista.empty();
    var clientes=[] ;
    var url = "http://localhost/ServiTec/php/admin/clientes.php";

           var params = {tex: ""};

            $.post(url,params).done(function(data){
               clientes = JSON.parse(data);


    vista.append("<div id='contenedorPersonal' >" + "<p> Nombre <br/>" +
    "<input type=text list=search id='nombreC' >" +
    "<datalist id=search>" +
    "</datalist>"  + "</p>" +
    "</div>"+
    "<div id='contenedorPersonal' id='apellido'>" + "<p> Apellido <br/>" +
    "<input type=text list=searchApellido id='apellidoC'>" +
    "<datalist id=searchApellido>" +
    "</datalist>"  + "</p>" +
    "</div>");




    vista.append("<div id='contenedorPersonal'>" + "<p>" + "Domicilio" + "<br/>" +
    "<input type=text id='domicilioC' placeholder='Ejem: Sector 2' >" +
    "</div>"  +
    "<div id='contenedorPersonal'>" + "<p>" + "Correo" + "<br/>" +
    "<input type=text id='correoC'  placeholder='Ejem: m_angel@hotmail.es'>" +
    "</div>" +
    "<div id='contenedorPersonal'>" + "<p>" + "Colonia" + "<br/>" +
    "<input type=text id='coloniaC'  placeholder='Ejem: Centro'>" +
    "</div>"  +
    "<div id='contenedorPersonal'>" + "<p>" + "Telefono" + "<br/>" +
    "<input type=number  id='telefonoC'  placeholder='Ejem: 3141234567'>" +
    "</div>" +
    "<div id='contenedorPersonal'>" + "<p>" + "Usuario" + "<br/>" +
    "<input type=text id='usuarioC' placeholder='Ejem: MigAngel' >" +
    "</div>" +
   "<div id='contenedorPersonal'>" + "<p>" + "Contraseña" + "<br/>" +
   "<input type=password id='contraC' placeholder='******'>" +
   "</div><br><br>"+
   "<div id='contenedorPersonal'>"+
   "<input type=submit id='agregarCliente' value='Agregar' >" +
   "</div>");
   for(y=0; y < clientes.length; y =y+3){
     $("#search").append("<option>" + clientes[y] );
     $("#searchApellido").append("<option>" + clientes[y+1] );
   }


       $("#apellidoC").on("keydown", function(){
         var nombreE = $("#nombreC").val().trim();
         var apellidoE = $("#apellidoC").val().trim();
         for(y=0; y < clientes.length; y =y+3){
           if(nombreE == clientes[y] && apellidoE == clientes[y+1]){
             var url = "http://localhost/ServiTec/php/admin/completarClientes.php";

                     var params = {nombre: nombreE,
                                  apellido: apellidoE,
                                  };

                      $.post(url,params).done(function(data){
                         var jsonCompleto = JSON.parse(data);
                         idUsuario = jsonCompleto[0];

                         $("#domicilioC").val(jsonCompleto[3]);
                         $("#correoC").val(jsonCompleto[4]);
                         $("#coloniaC").val(jsonCompleto[5]);
                         $("#telefonoC").val(jsonCompleto[6]);
                         $("#usuarioC").val(jsonCompleto[7]);
                         $("#contraC").val(jsonCompleto[8]);

              });
           }
         }
       });


     $("#agregarCliente").click(function() {

        var nombreE = $("#nombreC").val().trim();
        var apellidoE = $("#apellidoC").val().trim();
        var domicilioE = $("#domicilioC").val().trim();
        var CorreoE= $("#correoC").val().trim();
        var ColoniaE = $("#coloniaC").val().trim();
        var telefonoE = $("#telefonoC").val().trim();
        var UsuarioE = $("#usuarioC").val().trim();
        var ContraE = $("#contraC").val().trim();

        if(nombreE != "" && apellidoE != "" && domicilioE != "" && CorreoE != ""
        && ColoniaE !="" && telefonoE !="" && UsuarioE!="" && ContraE!=""){
          var url = "http://localhost/ServiTec/php/admin/agregarCliente.php";

                  var params = {nombre: nombreE,
                               apellido: apellidoE,
                                domicilio: domicilioE,
                                correo: CorreoE,
                                colonia:ColoniaE,
                                telefono: telefonoE,
                                usuario:UsuarioE,
                                contra:ContraE
                               };

                   $.post(url,params).done(function(data){
                      var json = JSON.parse(data);


           });
           agregarFolio();

        }else{
          alert("Debe llenar todos los campos");
        }

    	});
    });
    var agregarFolio = function (){
      var vista = $("#vistaAdminIndex");
   vista.empty();
       vista.append(
       "<div id='contenedor1'>" +
           "<img src='../../img/perfilePhoto.png' id='photo'/>" +
           "<div id='tituloContenedor'>" + "Agrega un nuevo folio" + "</div>" +
           "</div>" +
           "<div id='contenedor2'>" +
              "<div id='contenedorFormas'>" +
                  "<p>" + "Folio:" + "<br/>" +
                  "<input type='text' id='folioE' placeholder='Ejem: feb1001' >" + "</p>" +
                  "<p>" + "Marca:" + "<br/>" +
                  "<input type='text' id='marcaE' placeholder='Ejem: Samsung'>" + "</p>" +
                  "<p>" + "Serie:" + "<br/>" +
                  "<input type='text' id='serieE' placeholder='Ejem: 20080'>" + "</p>" +
                  "<p>" + "Producto:" + "<br/>" +
                  "<input type='text' id='productoE' placeholder='Ejem: Televisor'>" + "</p>" +
              "</div>" +
              "<div id='contenedorFormas'>" +
                 "<p>" + "Modelo:" + "<br/>" +
                  "<input type='text' id='modeloE' placeholder='Ejem: 5520'>" + "</p>" +

                  "<input type='submit'  value='Agregar' id='btnAgregarE'>" +
              "</div>" +
           "</div>");
    $("#btnAgregarE").click(function() {
       var folioE = $("#folioE").val().trim();
       var marcaE = $("#marcaE").val().trim();
       var serieE = $("#serieE").val().trim();
       var productoE = $("#productoE").val().trim();
       var modeloE = $("#modeloE").val().trim();

        if(folioE !="" &&  marcaE!="" && serieE!="" && productoE!="" && modeloE !="")
        { var url = "http://localhost/ServiTec/php/admin/insertarFolio.php";

                  var params = {folioE: folioE,
                               marcaE: marcaE,
                                serieE: serieE,
                                productoE: productoE,
                                modeloE:modeloE,
                                idUsuario: idUsuario
                               };

                   $.post(url,params).done(function(data){
                      var json = JSON.parse(data);
                       alert("Producto agregado");
                      mostrarFolio();

                   });
        }
      });


    };
};
var mostrarBusqueda = function(){
    var vista = $("#vistaAdminIndex");
    vista.empty();
        vista.append(
           "<div id='contenedor1'>" +
                "<img src='../../img/perfilePhoto.png' id='photo'/>" +
                "<div id='tituloContenedor'>" + "Busqueda" + "</div>" +
            "</div>" +
            "<div id='contenedor2'>" +
                "<div id='checkbox'>" +
                    "<input type='text' id='inputBusca' placeholder='Escribe tu busqueda...'/>" +
                    "<input type='submit' id='buscar' value='Buscar'/>" +
                    "<p>" + "</p>" +
                    "<div id='divbuscar'>"+
                    "<input type='checkbox' id='uno' class='checkboxClass' name='checkbox' value='checkbox'>" + "Aparato" +
                    "<br/>" +
                    "<input type='checkbox' class='checkboxClass' name='checkbox' value='checkbox'>" + "Folio" +
                    "<br/>" +
                    "<input type='checkbox' class='checkboxClass' name='checkbox' value='checkbox'>" + "Marca" +
                    "<br/>" +
                    "<input type='checkbox' class='checkboxClass' name='checkbox' value='checkbox'>" + "Modelo" +
                    "<br/>" +
                    "<input type='checkbox' class='checkboxClass' name='checkbox' value='checkbox'>" + "Serie" +
                    "<br/>" +
                    "</div>"+
                 "</div>" +
               "</div>");
    // aqui programo la mas hermosa del equipo

           $("#buscar").click(function() {

            var busqueda = $("#divbuscar");
            var texto = $("#inputBusca").val().trim();
            busqueda.empty();


               if (texto != "")
               {
            var url = "http://localhost/ServiTec/php/busqueda/busquedaAdmin.php";

                   var params = {tex: texto};

                    $.post(url,params).done(function(data){
                       var json = JSON.parse(data);
                        if(json == 1){
                        busqueda.append("folio no registrado");
                        }
                        else{
                    busqueda.empty();
                    busqueda.append("<h2>" + "Folio:"  + json[0] + "</h2>" +
                    "<br/><span>Marca:  </span>" + json[1] +
                    "<br/><span>Modelo: </span>" + json[2] +
                    "<br/><span>Serie: </span>" + json[3] +
                    "<br/><span>Producto: </span>" + json[4] +
                    "<br/><span>Costo: $</span>" + json[5]+
                    "<p></p>" +

                    "</div>"
                   );
                        }

                    });
               }
  });
};



var mostrarReporte = function(){
    var vista = $("#vistaAdminIndex");
    vista.empty();
        vista.append(
           "<div id='contenedor1'>" +
                "<img src='../../img/perfilePhoto.png' id='photo'/>" +
                   "<div id='tituloContenedor'>" + "Reportes" + "</div>" +
               "</div>" +
               "<div id='contenedor2'>" +
                    "<h1>" + "Reportes" + "</h1>" +
                    "Reportes por:" +
                    "<input type=text list=search >" +
                    "<datalist id=search>" +
                        "<option>" + "Semana" +
                        "<option>" + "Mes" +
                        "<option>" + "Trabajador" +
                        "<option>" + "D&iacute;a" +
                    "</datalist>" +
                    "<p>" + "</p>" +
                    "<div id='tablaReportes'>" +
                    "<table border='1px solid'>" +
                        "<tr>" +
                            "<td>" + "APARATO" + "</td>" +
                            "<td>" + "COSTO" + "</td>" +
                            "<td>" + "FECHA ENTREGA" + "</td>" +
                            "<td>" + "CLIENTE" + "</td>" +
                        "</tr>" +
                        "<tr>" +
                            "<td>" + "Laptop"  + "</td>" +
                            "<td>" + "2,000" + "</td>" +
                            "<td>" + "22/01/2015" + "</td>" +
                            "<td>" + "Adolfo" + "</td>" +
                        "</tr>" +
                    "</table>" +
                   "</div>" +
                "</div>");

};
var mostrarPersonal = function(){

  var url = "http://localhost/ServiTec/php/admin/productos.php";
              var params = {
                  folio : ""
              };
              $.post(url, params).done(function(data){
                var  jsonProductos = JSON.parse(data);

      var vista = $("#vistaAdminIndex");

      vista.empty();

          vista.append(
          "<div id='contenedor1'>" +
              "<img src='../../img/perfilePhoto.png' id='photo'/>" +
              "<div id='tituloContenedor'>" + "Personal" + "</div>" +
              "</div>" +
              "<div id='contenedor2'>" +
              "</div>");
              $("#contenedor1").append("<br><div id='menuLateral'>"+
                    "<nav>" +
                          "<ul>" +
                             "<li id='listaEmpleados'><a><span></span>Empleados</a></li>" +
                             "<li id='agregarEmpleados'><a><span ></span>Agregar un empleado </a></li>" +
                             "<li id='asignar'><a><span></span>Asignar productos</a></li>" +
                          "</ul>" +
                     "</nav>"+
                    "</div>" );
              listaEmpleados();
              for(l=0; l < jsonProductos.length; l = l+4){
                jsonPersonalAsignadoViejo.push(jsonProductos[l+1]);
                var formas = $("#contenedor2");
                var search = $("#search");
                formas.append("<div id='contenedorPersonal' class='"+jsonProductos[l+3] +"'>" + "<p>" +  jsonProductos[l] + "<br/>" +
                "<input type=text list=search id='text"+l+"'  value='"+jsonProductos[l+1] +"'' >" +
                "<datalist id=search>" +
                "</datalist>"  + "</p>" +
                "</div>" );
              }
              for(k=0; k < jsonPersonal.length; k = k+2){
                $("#search").append("<option>" + jsonPersonal[k] );
              }
              $("#contenedor2").append("<br><input type='submit'  value='Guardar' id='btnGuardarE'><br><br><p id'mensajes'></p>");
              $("#btnGuardarE").click(function() {
                  compararE();
              });
              $("#asignar").click(function() {
                  mostrarPersonal();
              });
              $("#agregarEmpleados").click(function() {
                  agregarEmp();
              });
              var agregarEmp = function(){
              formas.empty();
                formas.append("<div id='contenedorPersonal'>" + "<p>" + "Nombre" + "<br/>" +
                "<input type=text id='nombre' placeholder='Ejem: Miguel Angel' >" +
                "</div>" +
                "<div id='contenedorPersonal'>" + "<p>" + "Apellido" + "<br/>" +
                "<input type=text id='apellido'  placeholder='Ejem: Ventura Marin'>" +
                "</div>" +
                "<div id='contenedorPersonal'>" + "<p>" + "Domicilio" + "<br/>" +
                "<input type=text id='domicilio' placeholder='Ejem: Sector 2' >" +
                "</div>"  +
                "<div id='contenedorPersonal'>" + "<p>" + "Correo" + "<br/>" +
                "<input type=text id='correo'  placeholder='Ejem: m_angel@hotmail.es'>" +
                "</div>" +
                "<div id='contenedorPersonal'>" + "<p>" + "Colonia" + "<br/>" +
                "<input type=text id='colonia'  placeholder='Ejem: Centro'>" +
                "</div>"  +
                "<div id='contenedorPersonal'>" + "<p>" + "Telefono" + "<br/>" +
                "<input type=number  id='telefono'  placeholder='Ejem: 3141234567'>" +
                "</div>" +
                "<div id='contenedorPersonal'>" + "<p>" + "Usuario" + "<br/>" +
                "<input type=text id='usuario' placeholder='Ejem: MigAngel' >" +
                "</div>" +
               "<div id='contenedorPersonal'>" + "<p>" + "Contraseña" + "<br/>" +
               "<input type=password id='contra' placeholder='******'>" +
               "</div><br><br>"+
               "<div id='contenedorPersonal'>"+
               "<input type=submit id='enviar' value='Agregar' >" +
               "</div>");
               $("#enviar").click(function() {
                   var nombre = $("#nombre").val().trim();
                   var apellido = $("#apellido").val().trim();
                   var domicilio = $("#domicilio").val().trim();
                   var correo = $("#correo").val().trim();
                   var colonia = $("#colonia").val().trim();
                   var telefono = $("#telefono").val().trim();
                   var usuario = $("#usuario").val().trim();
                   var contra = $("#contra").val().trim();

                     agregarEmpleadosBD(nombre, apellido, domicilio, correo, colonia, telefono, usuario, contra);
               });

              };
              var agregarEmpleadosBD = function(nombre, apellido, domicilio, correo, colonia, telefono, usuario, contra){
                var url = "http://localhost/ServiTec/php/admin/agregarEmpleado.php";
              if (nombre=="" || apellido==""|| domicilio==""|| correo=="" || colonia == "" ||telefono =="" ||usuario ==""|| contra=="")
                      {
                        alert("Debe llenar todos los campos");
                      }else{
                        var params = {nombre: nombre,
                                    apellido: apellido,
                                    domicilio: domicilio,
                                    correo: correo,
                                    colonia: colonia,
                                    telefono: telefono,
                                    usuario: usuario,
                                    contra: contra
                                    };

                                    $.post(url, params).done(function(data){
                                      var  jsonRespuesta = JSON.parse(data);
                                      alert(jsonRespuesta);
                                      $("#nombre").val("");
                                      $("#apellido").val("");
                                      $("#domicilio").val("");
                                      $("#correo").val("");
                                      $("#colonia").val("");
                                      $("#telefono").val("");
                                      $("#usuario").val("");
                                      $("#contra").val("");
                                    });

                  }

              };
              var compararE = function(){
                  validacion();


              };
              var validacion = function(){
                var soloEmpleados = 0;
                var vacio = false;
                var inputTex;
                var totalCampos=jsonPersonalAsignadoViejo.length;
                for(m=0; m < jsonProductos.length; m = m+4){

                inputTex = $("#text"+m).val();
                  if (inputTex ==""){
                      vacio = true;
                  }else{
                    for(i = 0; i<jsonPersonal.length; i = i +1){
                      if(inputTex === jsonPersonal[i]){
                        soloEmpleados = 1 +soloEmpleados;
                      }
                    }
                  }
                }
                if (vacio==true){
                  alert("Llene todos los campos");
                }else{
                  
                    for(i = 0; i<jsonProductos.length; i = i +4){
                      jsonPersonalAsignado.push(jsonProductos[i+2],jsonProductos[i],jsonProductos[i+3]);

                      inputTex = $("#text"+i).val();
                      jsonPersonalAsignadoNuevo.push(inputTex);
                      }
                    enviarDatos();
                  
                }
              };
              var enviarDatos = function(){
                var inicial = 0;
                for(i = 0; i<jsonPersonalAsignado.length; i = i +3){
                  var nombreNuevo = jsonPersonalAsignadoNuevo[inicial];
                  var nombreViejo = jsonPersonalAsignadoViejo[inicial];
                  var idEmpleado = jsonPersonalAsignado[i];
                  var area = jsonPersonalAsignado[i+1];
                  var idUsuario;






                  if(nombreNuevo != nombreViejo){


                    for(X = 0; X<jsonPersonal.length; X = X +2){
                      if(nombreNuevo == jsonPersonal[X]){

                       idUsuario = jsonPersonal[X+1];


                      }
                    }

                    var url = "http://localhost/ServiTec/php/admin/actualizarAsignaciones.php";

                           var params = {idEmpleado: idEmpleado,
                                        area: area,
                                        idUsuario: idUsuario
                                        };

                                        $.post(url, params).done(function(data){
                                          var  jsonProductosq = JSON.parse(data);
                                        });


                }
                inicial =  inicial +1;
              }
              alert("actualizado");
            };
          })  ;
        var listaEmpleados = function(){
          var url = "http://localhost/ServiTec/php/admin/datosEmpleados.php";

                 var params = {tex: ""};

                  $.post(url,params).done(function(data){
                    var jsonDatosEmpleados = JSON.parse(data);

           $("#listaEmpleados").click(function() {
            $("#contenedor2").empty();
            $("#contenedor2").append( "<br><table>" +
                                        "<center><th>" + "Nombre" + "</th>" +
                                        "<th>" + "Apellido" + "</th>" +
                                        "<th>" + "Domicilio" + "</th>" +
                                        "<th>" + "Correo" + "</th>" +
                                        "<th>" + "Colonia" + "</th>" +
                                        "<th>" + "Telefono" + "</th>" +
                                        "<tbody id='tabla1'>" +
                                        "</tbody><center>" +
                                      "</table>");
              for(i=0; i<jsonDatosEmpleados.length; i = i + 6){
                $("#tabla1").append("<tr id='campos'>" +
                                      "<td>" + jsonDatosEmpleados[i] + "</td>" +
                                      "<td>" + jsonDatosEmpleados[i+1] + "</td>" +
                                      "<td>" + jsonDatosEmpleados[i+2] + "</td>" +
                                      "<td>" + jsonDatosEmpleados[i+3] + "</td>" +
                                      "<td>" + jsonDatosEmpleados[i+4] + "</td>" +
                                      "<td>" + jsonDatosEmpleados[i+5] + "</td>" +
                                      "<td>" + "<input type='submit' id='eliminarEmpleado' value='X'> " + "</td>" +
                                    "</tr>");
            }
         });
      });
    }
};
$(document).ready(function(){


    $("#folio").click(function() {
        mostrarFolio();
	});
    $("#busqueda").click(function() {
        mostrarBusqueda();
	});
     $("#reporte").click(function() {
        mostrarReporte();
	});
    $("#personal").click(function() {
        mostrarPersonal();
	});
});
