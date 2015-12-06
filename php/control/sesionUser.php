<?php
    session_start();

    if(!$_SESSION["autentificadoUser"]){
        header("Location: ../../php/control/salir.php");    
    }

?>
