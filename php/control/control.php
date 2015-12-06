<?php //Conección a la BDD
$con = mysql_connect('localhost','root',''); //Usuario y contraseña parala BDD
		mysql_select_db('servitec',$con); //seleccionamos la BDD

if (mysql_error()) { //De no conectar mostramos un error
echo "Error en la conección";
}
//
$usuario = $_POST["usuario"];
$contra = $_POST["passw"];

$resultAdmin = mysql_query("SELECT COUNT(*) as 'accesoAdmin' FROM user WHERE tipoDeU = 'admin' AND username  = '" . $usuario . "' AND passw = '" . $contra . "'",$con)
	or die("Error en: $resultAdmin: " . mysql_error());


if($rowAdmin = mysql_fetch_array($resultAdmin)) {
 if ($rowAdmin['accesoAdmin'] == 1) {
 session_start();
     $result2 = mysql_query("SELECT idUsuario  FROM user WHERE username  = '" . $usuario . "' AND passw = '" . $contra . "'",$con)
	or die("Error en: $result2: " . mysql_error());
        $row = mysql_fetch_array($result2);

        $_SESSION["autentificadoAdmin"]=true;
        $_SESSION["id"]=$row['idUsuario'];
        $_SESSION["nombre"]=$usuario;
        $pantallas = "html/admin/admin-index.php";


     echo json_encode( $pantallas);

}
}

$resultUser = mysql_query("SELECT COUNT(*) as 'accesoUser' FROM user WHERE tipoDeU = 'user' AND username  = '" . $usuario . "' AND passw = '" . $contra . "'",$con)
	or die("Error en: $resultUser: " . mysql_error());


if($rowUser = mysql_fetch_array($resultUser)) {
 if ($rowUser['accesoUser'] == 1) {
 session_start();
     $result2 = mysql_query("SELECT idUsuario  FROM user WHERE username  = '" . $usuario . "' AND passw = '" . $contra . "'",$con)
	or die("Error en: $result2: " . mysql_error());
        $row = mysql_fetch_array($result2);

        $_SESSION["autentificadoUser"]=true;
        $_SESSION["id"]=$row['idUsuario'];
        $_SESSION["nombre"]=$usuario;
        $pantallas = "html/cliente/usuario-index.php";
     echo json_encode( $pantallas);

}
}

$resultEmp = mysql_query("SELECT COUNT(*) as 'accesoEmp' FROM user WHERE tipoDeU = 'empleado' AND username  = '" . $usuario . "' AND passw = '" . $contra . "'",$con)
	or die("Error en: $resultEmp: " . mysql_error());


if($rowEmp = mysql_fetch_array($resultEmp)) {
 if ($rowEmp['accesoEmp'] == 1) {
 session_start();
     $result2 = mysql_query("SELECT idUsuario  FROM user WHERE username  = '" . $usuario . "' AND passw = '" . $contra . "'",$con)
	or die("Error en: $result2: " . mysql_error());
        $row = mysql_fetch_array($result2);

        $_SESSION["autentificadoEmp"]=true;
        $_SESSION["id"]=$row['idUsuario'];
        $_SESSION["nombre"]=$usuario;
        $pantallas = "html/empleado/empleado-index.php";
     echo json_encode( $pantallas);

}
}
if($rowAdmin['accesoAdmin'] == 0 && $rowUser['accesoUser'] == 0 && $rowEmp['accesoEmp'] == 0) {
$incorrecto = "Usuario o Contraseña incorrecta";
echo json_encode( $incorrecto);
}
mysql_close($con);
?>
