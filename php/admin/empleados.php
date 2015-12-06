<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}

$personal = array();

		    $total ="SELECT  nombre, idUsuario  FROM  user where tipoDeU= 'empleado'";

    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
       $nombre=$row['nombre'];
			$idUsuario=$row['idUsuario'];


       array_push($personal,
        $nombre,
				$idUsuario);


    }
  echo json_encode($personal);

mysql_close($con);
?>
