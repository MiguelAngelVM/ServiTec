<?php
$con = mysql_connect('localhost','root','');
		mysql_select_db('servitec',$con);
		
if (mysql_error()) {
    
echo "Tienes un error";   
}

$nombre = $_POST["nombre"];
$apellido=$_POST["apellido"];
$domicilio=$_POST["domicilio"];
$correo=$_POST["correo"];
$colonia=$_POST["colonia"];
$telefono=$_POST["telefono"];
$usuario=$_POST["usuario"];
$passw=$_POST["passw"];

$total ="insert into user (nombre,apellido,domicilio,correo,colonia,telefono,username,passw,tipoDeU)values('$nombre','$apellido','$domicilio','$correo','$colonia',$telefono,'$usuario','$passw','user')";

$row = mysql_query($total, $con);

session_start();
     $result2 = mysql_query("SELECT idUsuario  FROM user WHERE username  = '" . $usuario . "' AND passw = '" . $passw . "'",$con)
	or die("Error en: $result2: " . mysql_error());
        $row = mysql_fetch_array($result2);
            
        $_SESSION["autentificadoUser"]=true;
        $_SESSION["id"]=$row['idUsuario'];
        $_SESSION["nombre"]=$usuario;
        $pantallas = "html/cliente/usuario-index.php";
     echo json_encode( $pantallas);   




mysql_close($con);
?>