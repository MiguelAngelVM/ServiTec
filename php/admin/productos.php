<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}

$personal = array();

		    $total ="SELECT   area, nombre, idPersonal, user.idUsuario	  FROM   personal, user where personal.idUsuario= user.idUsuario " ;

    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
			 $area=$row['area'];
			 $nombre=$row['nombre'];
			 $idPersonal=$row['idPersonal'];
			$idUsuario=$row['idUsuario'];
       array_push($personal,
				$area, $nombre, $idPersonal, $idUsuario);


    }
  echo json_encode($personal);

mysql_close($con);
?>
