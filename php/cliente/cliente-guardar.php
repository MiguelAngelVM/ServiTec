<?php
include("../../php/control/sesionUser.php"); 
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);
		
if (mysql_error()) {
echo "error";
}
$id = $_SESSION['id'];
$com = $_POST['com'];
$idAparato = $_POST['folio'];
$fecha=date("Y-m-d"); 
$publicado="Publicado";


    $total ="insert into comentarios (comentario,publicado,idaparato,idusuario)values('$com','$publicado','$idAparato','$id')";
    $row = mysql_query($total, $con);

mysql_close($con);
?>
