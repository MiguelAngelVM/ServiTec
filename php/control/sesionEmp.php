<?php
    session_start();

    if(!$_SESSION["autentificadoEmp"]){
        header("Location: ../../php/control/salir.php");    
    }

?>
