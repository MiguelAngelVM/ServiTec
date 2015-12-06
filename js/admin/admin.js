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
});

var mostrarFolio = function(){
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
                      "<input type='text' id='folio' placeholder='Ejem: Francisco'>" + "</p>" +
                      "<p>" + "Marca:" + "<br/>" +
                      "<input type='text' id='marca' placeholder='Ejem: Samsung'>" + "</p>" +
                      "<p>" +"Serie:" + "<br/>" +
                      "<input type='text id='serie' placeholder='Ejem: 20080'>" + "</p>" +
                      "<p>" + "Producto:" + "<br/>" +
                      "<input type='text' id='producto' placeholder='Ejem: Televisor'>" + "</p>" +
                  "</div>" +
                  "<div id='contenedorFormas'>" +
                     "<p>" + "Modelo:" + "<br/>" +
                      "<input type='text' id='modelo' placeholder='Ejem: 5520'>" + "</p>" +
                      "<p>" + "Costo:" + "<br/>" +
                      "<input type='text' id='costo' placeholder='Ejem: Televisor'>" + "</p>" +
                      "<p>" + "F. Entrega:" + "<br/>" +
                      "<input type='date'>" + "</p>" +
                      "<p>" + "</p>" +
                      "<input type='submit' id='agregar' value='Agregar' id='btnAgregar'>" +                     
                  "</div>" + 
                "</div>");

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
                    "<br/><span>Estado: "  + json[6] + "</span>" +
                    "<br/><span>Reparó:   </span>" + json[7] +
                    "<br/><span>Cliente:   </span>" + json[8]+
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