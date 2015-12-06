<?php
$con = mysql_connect('localhost', 'root','');
       mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}

$folio = $_POST["tex"];

$total = "SELECT folio, marca, modelo, serie, producto, costo, estado, reparo, username FROM aparato, reporte, user Where reporte.idAparato = aparato.idAparato and aparato.idusuario = user.idusuario and folio = '$folio'";

$resultado = mysql_query($total,$con);
$row = mysql_fetch_array($resultado);

$newfolio = $row['folio'];
$marca = $row['marca'];
$modelo = $row['modelo'];
$serie = $row['serie'];
$producto = $row['producto'];
$costo = $row['costo'];
$estado = $row['estado'];
$reparo = $row['reparo'];
$username = $row['username'];


$array = array (
    $newfolio,
    $marca,
    $modelo,
    $serie,
    $producto,
    $costo,
    $estado,
    $reparo,
    $username
);

if($newfolio == "")
{
echo json_encode("1");
}
else{
    echo json_encode($array);
}
    

mysql_close($con);

?>