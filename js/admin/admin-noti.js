$(document).ready(function(){
    notificacion();
});
var notificacion = function(){
    
    var vista = $(".notificacionesClass");
    vista.empty();
    var nuevo = $("#contenedor2");
    var id;
    var nombre;
    var folio;
    var accion;
    
    
    var url = "http://localhost/ServiTec/php/admin/noti.php";
                var params = {
                    hola : "hola"
                };
                $.post(url, params).done(function(data){   
                    var json = JSON.parse(data);
                  
             for (i=0; i< json.length; i = i+3){ 
                     nuevo.append("<div class='notificacionesClass'>" +
                       json[i] + 
                        "<div id='notificacionesId'>" +
                            "Folio: " + json[i+1] +" " +
                            "Accion: " + json[i+2] +
                        "</div>" +
                    "</div>");
                    
                    }
                });
    
    
    
   
};