<?php
include("../../php/control/sesionUser.php"); 
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);
		
if (mysql_error()) {
echo "error";
}
$id = $_SESSION['id'];
$idAparato = $_POST['folio'];
$accion = $_POST['textAccion'];


    $total ="insert into noti  (idUsuario,idAparato,accion)values('$id','$idAparato','$accion')";
    $row = mysql_query($total, $con);

if ($accion=="Acepto reparación"){
    $total2 = "UPDATE `servitec`.`reporte` SET `estado` = 'reparando' WHERE `reporte`.`idAparato` =               $idAparato";
    $row = mysql_query($total2, $con);
  echo json_encode("Reparando"); 
  
}
if ($accion=="Cancelar reparación"){
   $total2 = "UPDATE `servitec`.`reporte` SET `estado` = 'cancelado' WHERE `reporte`.`idAparato` =               $idAparato";
    $row = mysql_query($total2, $con);
    echo json_encode("Cancelado");
}
mysql_close($con);
?>
