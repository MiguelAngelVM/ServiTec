<?php
    define('servidor', 'localhost');
    define('servidor_usuario', 'root'); 
    define('servidor_clave', ''); 
    define('base_datos', 'serviTec');

    $html_link = mysql_connect(servidor, servidor_usuario, servidor_clave) or die ("No se puede conectar con el servidor");
    mysql_select_db(base_datos, $html_link) or die ("No se puede seleccionar la base de datos");
?>