<?php
$con = mysql_connect('localhost','root','');
mysql_select_db('servitec',$con);

if (mysql_error()) {

echo "Tienes un error";
}

$nombre=$_POST["nombre"];
$apellido=$_POST["apellido"];
$domicilio=$_POST["domicilio"];
$correo=$_POST["correo"];
$colonia=$_POST["colonia"];
$telefono=$_POST["telefono"];
$usuario=$_POST["usuario"];
$contra=$_POST["contra"];


$total = "INSERT INTO user   (   nombre, apellido, domicilio, correo, colonia, telefono, username, passw, tipoDeU) VALUES
( '$nombre', '$apellido', '$domicilio', '$correo', '$colonia', $telefono, '$usuario', '$contra', 'empleado')";

$row = mysql_query($total, $con) or die ("Error en: $total: " . mysql_error());


echo json_encode("Empleado agregados");

mysql_close($con);
?>
