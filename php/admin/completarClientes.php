<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}

$nombre1=$_POST["nombre"];
$apellido1=$_POST["apellido"];


$personal = array();

		    $total ="SELECT nombre, apellido, idUsuario,domicilio, correo, colonia,
				telefono, username, passw FROM user where tipoDeU= 'user' and nombre = '$nombre1'
				 and apellido = '$apellido1' ";

    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
      $nombre=$row['nombre'];
			$apellido=$row['apellido'];
			$idUsuario=$row['idUsuario'];
			$domicilio=$row['domicilio'];
			$correo=$row['correo'];
			$telefono=$row['telefono'];
			$colonia=$row['colonia'];
			$usuario=$row['username'];
			$contra=$row['passw'];


       array_push($personal,
			$idUsuario,
        $nombre,
				$apellido,
				$domicilio,
				$correo,
				$colonia,
				$telefono,	
				$usuario,
				$contra
				);


    }
  echo json_encode($personal);

mysql_close($con);
?>
