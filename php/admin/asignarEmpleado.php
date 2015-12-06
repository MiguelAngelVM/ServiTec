<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}
$nombre=$_POST["nombre"];


		    $total ="UPDATE `servitec`.`personal` SET `idusuario` = $idUsuario WHERE
				 `personal`.`idPersonal` = $idEmpleado";

				mysql_query($total, $con) or die ("Error en: $total: " . mysql_error());



  echo json_encode("H");

mysql_close($con);
?>
