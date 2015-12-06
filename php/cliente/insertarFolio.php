<?php
$con = mysql_connect('localhost','root','');
mysql_select_db('servitec',$con);
		
if (mysql_error()) {
    
echo "Tienes un error";   
}

$folio=$_POST["folio"];
$marca=$_POST["marca"];
$modelo=$_POST["modelo"];
$serie=$_POST["serie"];
$producto=$_POST["producto"];
$costo=$_POST["costo"];

$total = "INSERT INTO aparato (folio, marca, modelo, serie, producto) VALUES ('".$folio."','".$marca."','".$modelo."','".$serie."','".$producto."')";

$row = mysql_query($total, $con) or die ("Error en: $total: " . mysql_error());


echo json_encode("Datos agregados");

mysql_close($con);
?>