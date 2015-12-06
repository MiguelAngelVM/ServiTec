var arraynotificaciones = [];
var jsonPersonal;
var asignar=[];

var notificacion = function(){
  var folionew;
    var vista = $(".notificacionesClass");
    vista.empty();
    $("#titulo").text("Estos clientes te esperan");
    var nuevo = $("#contenedor2");
    var id;
    var nombre;
    var folio;
    var accion;
    nuevo.append("<br>");

    var url = "http://localhost/ServiTec/php/admin/noti.php";
                var params = {
                    hola : "hola"
                };
                $.post(url, params).done(function(data){
                    var json = JSON.parse(data);

             for (i=0; i< json.length; i = i+4){
                     nuevo.append("<div class='notificacionesClass'>" +
                       json[i] +
                        "<div id='"+json[i+1]+"' class='notificacionesId'  >" +
                            "Folio: " + json[i+1] +" " +
                            "<br><p>"+json[i+3] +"</p>"+
                            "Accion: " + json[i+2] +

                        "</div>" +
                    "</div>");
                    arraynotificaciones.push(json[i+1],json[i+2],json[i+3]);
                }

                for (j=0; j< arraynotificaciones.length; j = j+3){
                  
                        if(arraynotificaciones[j+1]=="acepto cotizacion"){
                          asignar.push(arraynotificaciones[j]);

                          var url = "http://localhost/ServiTec/php/admin/empleados.php";
                                      var params = {
                                          folio : arraynotificaciones[j]
                                      };
                                      $.post(url, params).done(function(data){
                                          jsonPersonal = JSON.parse(data);
                                      });
                                    var butonNoti = $("#"+arraynotificaciones[j]);
                            butonNoti.click(function() {

                            $("#contenedor2").empty();
                            $("#contenedor2").append("<br><br><p>Se le asigno a </p>"+
                            "<input id='listita' type=text list=lista value='' >" +
                            "<datalist id=lista>" +
                            "</datalist><br><br>" +
                            "<input type='submit'value='confirmar'id='confirmar'><br><br>");

                            for(k=0; k < jsonPersonal.length; k = k+2){
                            $("#lista").append("<option >" + jsonPersonal[k] );
                            }
                            $("#confirmar").click(function() {
                              var listita=$("#listita").val().trim();
                              if (listita !=""){
                                $("#contenedor2").empty();

                                var url = "http://localhost/ServiTec/php/admin/s.php";
                                            var params = {
                                                nombre : listita,
                                                folio : asignar

                                            };
                                            $.post(url, params).done(function(data){
                                                jsonRespuesta = JSON.parse(data);
                                            });
                                notificacion();
                              }
                          });



                      });

                        }
                        if(arraynotificaciones[j+1]=="espera cotizacion"){
                          $("#"+arraynotificaciones[j]).click(function() {
                            alert("espera");
                        });

                        }
                        if(arraynotificaciones[j+1]=="canselo reparacion"){
                          $("#"+arraynotificaciones[j]).click(function() {
                            alert("canselo");
                        });

                        }
                        if(arraynotificaciones[j+1]=="mensaje"){
                          $("#"+arraynotificaciones[j]).click(function() {
                            alert("mensaje");
                        });
                        }
                   }
            });
};
$(document).ready(function(){
    notificacion();
});
