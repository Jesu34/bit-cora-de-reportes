<?php 
include "conexion.php"; //importa la conexion

//Son los valores que llegan del formulario por medio de post
// el $correo es el nombre que le damos a la variable
$correo = $_POST["correo"];
$clave = $_POST["clave"];
$rol = $_POST["rol"];
$nombre = $_POST["nombre"];

//insertar los datos en la tabla
$sql = "INSERT INTO usuarios (correo, clave, rol, nombre)
VALUES ('$correo', '$clave', '$rol', '$nombre')";

if ($conn->query($sql) === TRUE) {
  echo "Usuario registrado con exito";
  header('Location: Login.php');// redireccionamos
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>