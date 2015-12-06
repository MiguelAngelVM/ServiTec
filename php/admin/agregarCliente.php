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

$total1 ="SELECT COUNT(*) as existente FROM user where tipoDeU= 'user' and nombre = '$nombre'
 and apellido = '$apellido' ";

$datos1=mysql_query($total1, $con);
$row1=mysql_fetch_array($datos1);

if ($row1['existente'] == 1) {
  $total ="UPDATE user SET domicilio = '$domicilio', correo = '$correo', colonia= '$colonia', telefono = $telefono,
  username = '$usuario', passw = '$contra' WHERE nombre = '$nombre' and apellido = '$apellido'";
  mysql_query($total, $con) or die ("Error en: $total: " . mysql_error());

}else{
  $total = "INSERT INTO user (nombre, apellido, domicilio, correo, colonia, telefono, username, passw, tipoDeU) VALUES
  ( '$nombre', '$apellido', '$domicilio', '$correo', '$colonia', $telefono, '$usuario', '$contra', 'user')";

  $row = mysql_query($total, $con) or die ("Error en: $total: " . mysql_error());


}







echo json_encode("Empleado agregados");

mysql_close($con);
?>
