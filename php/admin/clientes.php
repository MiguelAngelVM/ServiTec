<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}

$personal = array();

		    $total ="SELECT  nombre, apellido, idUsuario   FROM  user where tipoDeU= 'user'";

    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
       $nombre=$row['nombre'];
			$apellido=$row['apellido'];
			$idUsuario=$row['idUsuario'];


       array_push($personal,
        $nombre,
				$apellido,
				$idUsuario);


    }
  echo json_encode($personal);

mysql_close($con);
?>
