<?php
include("../../php/control/sesionUser.php"); 
$con = mysql_connect('localhost','root','');
		mysql_select_db('ServiTec',$con);
		
if (mysql_error()) {
echo "error";
}
$id = $_SESSION['id'];
$folio = $_POST['folio'];

    
     $total ="SELECT username, producto, marca, modelo, falla, estado, costo, aparato.idaparato FROM user, aparato, reporte where user.idUsuario =$id and aparato.idusuario =  user.idusuario and reporte.idAparato = aparato.idAparato and folio='$folio' ";
     $row = mysql_query($total, $con);
     $datos = mysql_fetch_array($row);

     $username = $datos['username'];
     $producto = $datos['producto'];
     $marca = $datos['marca'];
     $modelo = $datos['modelo'];
     $falla = $datos['falla'];
     $estado = $datos['estado'];
     $costo = $datos['costo'];
     $idaparato = $datos['idaparato'];

    if($estado=="cotizando"){
        $boton= "Aun en revisión ";
    }
    if($estado=="cotizado"){
        $boton= "Acepto reparación";
    }
    if($estado=="reparando"){
        $boton= "Cancelar reparación";
    }
    if($estado=="reparado"){
        $boton= "Su aparato ya está reparado";
    }
    if($estado=="entregado"){
        $boton= "Gracias confiar en nosotros";
    }
    if($estado=="cancelado"){
        $boton= "Cancelado";
    }
    if($estado=="bodega"){
        $boton= "Se cobrara almacén ";
    }
    
$array = array(
	$username,
	$producto,
    $marca,
    $modelo,
    $falla,
    $estado,
    $costo,
    $boton,
    $idaparato);
        
    


  echo json_encode($array); 
  

mysql_close($con);
?>
