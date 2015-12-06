var total;
$(document).ready(function(){
    productos();
    $("#buscarF").click(function() {
        agregarF();
    });

});
var agregarF = function(){
    var aFolio = $("#inputF").val().trim();
    if(aFolio!=""){
        $("#inputF").val("");
       var url = "http://localhost/ServiTec/php/cliente/cliente-agregarF.php";
                        var params = {
                            folio: aFolio,
                            };
        $.post(url, params).done(function(data){
                                var json = JSON.parse(data);


        });
        productos();
    }
    else{
        alert("agrege un folio");
    }
};

var productos = function(){
    var ul = $("#productos");
    var contenedorUser = $("#contenedorUser");
    ul.empty();


    var url = "http://localhost/ServiTec/php/cliente/cliente.php";
                var params = {

                };
                $.post(url, params).done(function(data){
                    var json = JSON.parse(data);

                    for (i=0; i< json.length; i++){
                     ul.append("<li id='prod"+ i +"'>" + "<a>" + json[i] + "</a>" + "</li>");

                    }
                    ul.append("<li id='salir-admin'> <a href='../../php/control/salir.php'><span class='icon-user-plus'></span>SALIR</a></li>");
                     $("#prod0").click(function() {
                        datos(0);
                         contenedorUser.empty();
                    });
                    $("#prod1").click(function() {
                        datos(1);
                    });
                    $("#prod2").click(function() {
                        datos(2);
                    });
                    $("#prod3").click(function() {
                        datos(3);
                    });
                    $("#prod4").click(function() {
                        datos(4);
                    });
                    $("#prod5").click(function() {
                        datos(5);
                    });
                    $("#prod6").click(function() {
                        datos(6);
                    });
                    $("#prod7").click(function() {
                        datos(7);
                    });
                    $("#prod8").click(function() {
                        datos(8);
                    });
                    $("#prod9").click(function() {
                        datos(9);
                    });
                    $("#prod10").click(function() {
                        datos(10);
                    });

                });



};

var datos = function(n){
    var folio = $("#prod"+n).text();
    var url = "http://localhost/ServiTec/php/cliente/cliente-datos.php";
                        var params = {
                            folio: folio
                            };
    $.post(url, params).done(function(data){
                                var json = JSON.parse(data);
        $("aside").empty();
        $("aside").append("<h2>" + "BIENVENID@ " +json[0] +"</h2>" +
                         "<div class='datosUsuario'>" +
                             "<div id='diasFaltantes'>" +
                             "</div>" +
                             "<progress value='10' max='100'>" + "</progress>" +
                             "<div id='divBoton-Img'>" +
                                "<div id='div-Img'>" +
                                    "<img src='../../img/perfilePhoto.png' id='photoUser'>" +
                                "</div>" +
                                "<div id=div-Boton>" +
                                    "<input type='submit' value='"+json[7]+"' id='boton'  class='button-submit-comment' />" +
                                "</div>" +
                            "</div>" +
                            "<p></p>" +
                            "<br/><span>Tipo:   </span>" + json[1] +
                            "<br/><span>Marca: </span>" + json[2] +
                            "<br/><span>Modelo: </span>" + json[3] +
                            "<br/><span>Fallo: </span>" + json[4] +
                            "<br/><span>Estado: </span>" + json[5]+
                            "<p></p>" +
                            "<br/><span>Costo: " + " $" + json[6] + "</span>" +
                        "</div>");

         $("#contenedorUser").empty();
        $("#contenedorUser").append("<article id='vistaUser'>" +
                                    "<div id='estado'></div>" +
                                    "<br/>" +
                                    "<nav>" +
                                       "<img src='../../img/perfilePhoto.png' class='photo_ico'> <a href=''></a>" +
                                       "<input type='text' id='texto' placeholder='Dudas y sugerencias...'/>" +
                                       "<input type='submit' id='comentar' value='Enviar'  class='button-submit-comment'/>" +
                                    "</nav></br><br>" +

                                    "</article>");
                mostrarCom(json[8]);

                $("#boton").click(function() {
                accion(json[7], json[8]);
                var costo = parseInt(json[6]);

                });
                $("#comentar").click(function(){
                var texto = $("#texto").val().trim();
                $("#texto").val("");
                if(texto!=""){
                comentar(json[8],texto);

                }else{
                    alert("agrege un comentario");
                }
                     mostrarCom(json[8]);
                });


    });
};
var mostrarCom = function(idfolio){
    $("#navCom").empty();
    var url = "http://localhost/ServiTec/php/cliente/cliente-ver.php";
                        var params = {
                            folio: idfolio
                            };
    $.post(url, params).done(function(data){
                                var jsonCom = JSON.parse(data);
                     for (j=0; j < jsonCom.length; j=j+2){
                        $("#vistaUser").append("<nav id='navCom'>" +
                                       "<img src='../../img/perfilePhoto.png' class='photo_ico'> <a href=''>                                        </a>" +
                                        jsonCom[j] +
                                        "</nav>"+ "<p id='hora'>" +jsonCom[j+1] + "<p>");
                    }

    });

};
var comentar = function(folioCom, texto){
var url = "http://localhost/ServiTec/php/cliente/cliente-guardar.php";
                        var params = {
                            com: texto,
                            folio: folioCom
                            };

    $.post(url, params).done(function(data){
                                var json = JSON.parse(data);

    });
};
var accion = function(textAccion, folio){


    var url = "http://localhost/ServiTec/php/cliente/cliente-accion.php";
                        var params = {
                            textAccion: textAccion,
                            folio: folio
                            };
    $.post(url, params).done(function(data){
                                var json = JSON.parse(data);
                                $("#boton").val(json);
        productos();

    });
};
