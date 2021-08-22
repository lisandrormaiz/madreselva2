<?php

$errorMSG = "";

// nombre
if (empty($_POST["nombre"])) {
    $errorMSG = "poné un nombre ";
} else {
    $nombre = $_POST["nombre"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "ingrese dirección de correo válido ";
} else {
    $email = $_POST["email"];
}

// mensaje
if (empty($_POST["mensaje"])) {
    $errorMSG .= "ingrese un mensaje ";
} else {
    $mensaje = $_POST["mensaje"];
}


$EmailTo = "aromasms@gmail.com";
$Subject = "ha recibido un nuevo mensaje";

// preparo el cuerpo del mail
$Body = "";
$Body .= "nombre: ";
$Body .= $nombre;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "mensaje: ";
$Body .= $mensaje;
$Body .= "\n";

// enviar mail
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirige
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Algo salió mal";
    } else {
        echo $errorMSG;
    }
}

?>