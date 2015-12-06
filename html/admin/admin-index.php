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
    <link rel="stylesheet" href="../../css/pantallas/styleAdmin.css"/>
    <link rel="stylesheet" href="../../css/estatico/estatico-admin.css"/>
    <link rel="stylesheet" href="../../css/estatico/estatico-principal.css"/>
    
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
                 <div id="salir">
                    <a href="../../php/control/salir.php">
                    <input type="submit"   id="salir-admin" value="Salir" class="button-submit-comment"/></a>
                 </div>
             </center>
         </header>
        <section id="contenedor">
            <div id="menu">
               <nav>
                      <ul>
                       <li><a href="admin-index.php"><span class="icon-home3"></span>NOTIFICACIONES</a></li>
                       <li id="folio"><a><span class="icon-profile"></span>AGREGAR FOLIO</a></li>
                       <li id="busqueda"><a><span class="icon-home3"></span>BUSQUEDA</a></li>
                       <li id="reporte"><a><span class="icon-user-plus"></span>REPORTES</a></li>
                     </ul>
               </nav>
            </div>
              
                <article id="vistaAdminIndex">
                   <div id="contenedor1">
 
                       <img src="../../img/perfilePhoto.png" id="photo"/>
                       <div id="tituloContenedor">Bienvenido Administrador</div>
                   </div>
                   <div id="contenedor2">
                        <h1>Estos clientes te esperan</h1>
                        <br/>
                        
                    </div> 
                   
                   </article>
       </section>
       <script src="../../js/jquery.min.js"></script>
       <script src="../../js/admin/admin.js"></script>
        <script src="../../js/admin/admin-noti.js"></script>
    
    </body>
</html>