<?php 
include("../../php/control/sesionUser.php"); 
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Usuario-Prod1</title>
        <meta charset="UTF-8">
        <meta name="description" content="">
        <meta name="keywords" content="">
        <link rel="stylesheet" href="../../css/cliente/styleUser.css"/>
        <link rel="stylesheet" href="../../css/pantallas/styleUser.css"/>
        
        <link rel="stylesheet" href="../../css/estatico/estatico-empleado.css"/>  
        <link rel="stylesheet" href="../../css/estatico/estatico-admin.css"/>

        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
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
                    <input type="submit"   id="salir-cliente" value="Salir" class="button-submit-comment"/></a>
                 </div>
             </center>
            
         </header>
        
        <aside>
        <center><br><br><br>En esta área podrá ver la información sobre su aparato, además podrá comunicarse de primera mano con los administradores del taller</center> 
            
       </aside>
        <div id="divFolio">
                <input id="inputF" type="text" placeholder="agregar folio">
                <input id="buscarF" type="submit"  value="Agregar">
        </div>
        <section id="contenedorPrincipal">
            
        <div id="menu">
            <h1 id="h1Prod">PRODUCTOS REGISTRADOS</h1>
             <nav>
                  <ul id="productos">
                  
                 </ul>
            </nav>
        </div>
        
        <section id="contenedorUser"> 
              Seleccione un producto  
        
        </section>
    </section>
      <script src="../../js/jquery.min.js"></script>
     <script src="../../js/cliente/cliente.js"></script>
    </body>
</html>