<?php
$con = mysql_connect('localhost','root','');
mysql_select_db('servitec',$con);

if (mysql_error()) {

echo "Tienes un error";
}

$folio=$_POST["folioE"];
$marca=$_POST["marcaE"];
$modelo=$_POST["modeloE"];
$serie=$_POST["serieE"];
$producto=$_POST["productoE"];
$idUsuario=$_POST["idUsuario"];


$total = "INSERT INTO aparato (idUsuario,folio, marca, modelo, serie, producto) VALUES ('".$idUsuario."','".$folio."','".$marca."','".$modelo."','".$serie."','".$producto."')";
$row = mysql_query($total, $con) or die ("Error en: $total: " . mysql_error());




echo json_encode("Datos agregados");

mysql_close($con);
?>
