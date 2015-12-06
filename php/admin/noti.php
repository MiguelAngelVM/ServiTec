<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);

if (mysql_error()) {
echo "error";
}

$respuesta = array();

    $total ="SELECT  nombre, folio, accion, producto FROM notificaciones, user, aparato where user.idUsuario = aparato.idUsuario and aparato.idAparato = notificaciones.idAparato  ";

    $datos=mysql_query($total, $con);
    while ($row=mysql_fetch_array($datos)) {
       $nombre=$row['nombre'];
       $folio=$row['folio'];
       $accion=$row['accion'];
			$producto=$row['producto'];

       array_push($respuesta,
        $nombre,
        $folio,
        $accion,
				$producto);


    }
  echo json_encode($respuesta);

mysql_close($con);
?>
