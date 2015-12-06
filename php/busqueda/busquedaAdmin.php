<?php
$con = mysql_connect('localhost', 'root','');
       mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}

$folio = $_POST["tex"];

$total = "SELECT folio, marca, modelo, serie, producto FROM aparato  Where  folio = '$folio'";

$resultado = mysql_query($total,$con);
$row = mysql_fetch_array($resultado);

$newfolio = $row['folio'];
$marca = $row['marca'];
$modelo = $row['modelo'];
$serie = $row['serie'];
$producto = $row['producto'];



$array = array (
    $newfolio,
    $marca,
    $modelo,
    $serie,
    $producto
);



    echo json_encode($array);

    

mysql_close($con);

?>