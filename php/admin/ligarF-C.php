<?php
$con = mysql_connect('localhost','root','');
mysql_select_db('servitec',$con);

if (mysql_error()) {

echo "Tienes un error";
}

$folio=$_POST["folioE"];


$select = "SELECT idAparato from aparato where folio = '$folio'  ";
$row1 = mysql_query($select, $con) or die ("Error en: $select: " . mysql_error());

$idAparato=$row1['idAparato'];
echo $idAparato;

$total2 = "INSERT INTO  reporte (estado, idAparato) VALUES ('cotizando', $idAparato)";
$row2 = mysql_query($total2, $con) or die ("Error en: $total2: " . mysql_error());




echo json_encode("Datos agregados");

mysql_close($con);
?>
