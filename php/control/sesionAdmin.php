<?php
    session_start();

    if(!$_SESSION["autentificadoAdmin"]){
        header("Location: ../../php/control/salir.php");    
    }

?>
