<?php
include("../../php/control/sesionAdmin.php");
?>

<!DOCTYPE html>
<html>
<head>
    <title>Administrador-Index</title>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link rel="stylesheet" href="../../css/admin/styleAdmin.css"/>
    <link rel="stylesheet" href="../../css/admin/ayudaAdmin.css">
    



</head>
    
    <body>

    <div id="Login">
        <input type="submit"  id="ayuda" value="Ayuda" class="button-submit-comment"/>
    </div>
        <div id="respuesta"></div>
   
      
       <header >
                 

         </header>
        <section id="contenedor">
            <div id="menu">
               <nav>
                      <ul>
                       <li><a href="admin-index.php"><span class="icon-home3"></span>NOTIFICACIONES</a></li>
                       <li id="folio"><a><span class="icon-profile"></span>AGREGAR CLIENTE</a></li>
                       <li id="busqueda"><a><span class="icon-home3"></span>BUSQUEDA</a></li>
                       <li id="reporte"><a><span class="icon-user-plus"></span>REPORTES</a></li>
                       <li id="personal"><a><span class="icon-user-plus"></span>PERSONAL</a></li>
                      <li id="salir-admin"> <a href="../../php/control/salir.php"><span class="icon-user-plus"></span>SALIR</a></li>
                     </ul>
               </nav>
            </div>

                <article id="vistaAdminIndex">
                   <div id="contenedor1">

                       <img src="../../img/perfilePhoto.png" id="photo"/>
                       <div id="tituloContenedor">Bienvenido Administrador</div>
                   </div>
                   <div id="contenedor2">
                        <h1 id="titulo">Estos clientes te esperan</h1>
                        <br/>

                    </div>

                   </article>
       </section>
       <script src="../../js/jquery.min.js"></script>
       <script src="../../js/admin/admin.js"></script>
       <script  type="text/jscript" src="../../js/admin/ayudaAdmin.js"></script>
   
       <script src="../../js/admin/admin-noti.js"></script>

    </body>
</html>
