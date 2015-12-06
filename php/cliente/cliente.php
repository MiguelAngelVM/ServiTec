<?php
include("../../php/control/sesionUser.php"); 
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);
		
if (mysql_error()) {
echo "error";
}
$id = $_SESSION['id'];
   $productos = array();
    
    $total ="SELECT folio FROM user, aparato where user.idUsuario =$id and aparato.idusuario = user.idusuario ";
        
    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
       $folio=$row['folio'];

       array_push($productos,
        $folio);

        
    }
  echo json_encode($productos); 
  

mysql_close($con);
?>
