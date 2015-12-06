<?php
include("../../php/control/sesionUser.php"); 
$con = mysql_connect('localhost','root','');
		mysql_select_db('ServiTec',$con);
		
if (mysql_error()) {
echo "error";
}
$id = $_SESSION['id'];
$idAparato = $_POST['folio'];
$comentarios = array();
    
    $total ="SELECT comentario, fechaCom FROM comentarios where idUsuario =$id and idusuario = $idAparato order by fechaCom DESC";
        
    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
       $com=$row['comentario'];
        $fecha=$row['fechaCom'];

       array_push($comentarios,
        $com, 
        $fecha); 
    }
echo json_encode($comentarios);
mysql_close($con);
?>
