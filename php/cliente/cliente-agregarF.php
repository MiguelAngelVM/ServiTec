<?php
include("../../php/control/sesionUser.php"); 
$con = mysql_connect('localhost','root','');
		mysql_select_db('ServiTec',$con);
		
if (mysql_error()) {
echo "error";
}
$id = $_SESSION['id'];
$folio = $_POST['folio'];

    
     $total ="UPDATE aparato SET idusuario = '$id' WHERE folio = '$folio'";
     $row = mysql_query($total, $con);
    
    


  echo json_encode("agregado"); 
  

mysql_close($con);
?>
