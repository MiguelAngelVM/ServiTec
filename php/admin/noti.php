<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('ServiTec',$con);
		
if (mysql_error()) {
echo "error";
}

$noti = array();
    
    $total ="SELECT  nombre, folio, accion FROM noti, user, aparato where user.idUsuario = noti.idUsuario and aparato.idAparato = noti.idAparato  ";
        
    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
       $nombre=$row['nombre'];
       $folio=$row['folio'];
       $accion=$row['accion'];

       array_push($noti,
        $nombre,
        $folio,
        $accion);

        
    }
  echo json_encode($noti);  

mysql_close($con);
?>
