<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}

$personal = array();

		    $total ="SELECT  nombre, apellido, domicilio, correo, colonia, telefono
				  FROM  user where tipoDeU= 'empleado'";

    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
       $nombre=$row['nombre'];
			$apellido=$row['apellido'];
			$domicilio=$row['domicilio'];
			$correo=$row['correo'];
			$colonia=$row['colonia'];
			$telefono=$row['telefono'];



			 if($nombre != "no definido"){
			       array_push($personal,
			        $nombre,
							$apellido,
							$domicilio,
							$correo,
							$colonia,
							$telefono);

			}
    }
  echo json_encode($personal);

mysql_close($con);
?>
