<?php 
include("../../php/control/sesionEmp.php"); 
?>
<!DOCTYPE html>
<html>
<head>
    <title>Empleado Index</title>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="../../css/empleado/styleEmployee.css"/>
    <link rel="stylesheet" href="../../css/pantallas/styleEmployee.css"/>
    <link rel="stylesheet" href="../../css/estatico/estatico-principal.css"/>
    <link rel="stylesheet" href="../../css/estatico/estatico-empleado.css"/>
    
</head>
   <body>
       <header id="estatico">
             <center>
                 <div id="divLogo">
                     <img  id="logo" class="logo1" src="../../img/1.JPG">
                 </div>  
                 <div id="divSamsumg">
                     <img  id="samsumg" class="logo1" src="../../img/samsumg.png">
                 </div> 
                 <div id="salir-admin">
                    <a href="../../php/control/salir.php">
                    <input type="submit"   id="salir" value="Salir" class="button-submit-comment"/></a>
                 </div>
             </center>
         </header>
        <section id="contenedor">
            <div id="menu">
               <nav>
                  <ul>
                      <li><a href="empleado-index.php"><span class="icon-home3"></span>NOTIFICACIONES</a></li>
                      <li><a    id="folio"><span class="icon-profile"></span>AGREGAR FOLIO</a></li>
                      <li><a id="busqueda"><span class="icon-home3"></span>BUSQUEDA</a></li>
                 </ul>
               </nav>
            </div>
            <article id="vistaUser">
               <div id="contenedor1">
                   <img src="../../img/perfilePhoto.png" id="photo"/>
                   <div id="tituloContenedor">Bienvenido Integrante de ServiTec</div>
               </div>
               <div id="contenedor2">
                    <h1>Estas son las nuevas del d&iacute;a</h1>
                    <br/>
                    <div class="notificacionesClass">
                       Jordan 
                        <div id="notificacionesId">
                            Acept&oacute; la reparaci&oacute;n
                        </div>
                    </div>
                    <div class="notificacionesClass">
                       Chespirito
                        <div id="notificacionesId">
                            Agregar el televisor
                        </div>
                    </div>
                    <div class="notificacionesClass">
                       Antonio 
                        <div id="notificacionesId">
                            Necesita una cotizaci&oacute;n
                        </div>
                    </div>
                    <div class="notificacionesClass">
                       Alexandro 
                        <div id="notificacionesId">
                            Acept&oacute; la reparaci&oacute;n
                        </div>
                    </div>
                    <div class="notificacionesClass">
                       Ethan
                        <div id="notificacionesId">
                            Necesita un diagn&oacute;stico de su celular
                        </div>
                    </div>
                    <div class="notificacionesClass">
                       Ethan
                        <div id="notificacionesId">
                            Necesita un diagn&oacute;stico de su televisor
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <script src="../../js/jquery.min.js"></script>
       <script src="../../js/emp/emp.js"></script>
    </body>
</html>
