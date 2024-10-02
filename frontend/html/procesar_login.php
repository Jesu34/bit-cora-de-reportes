<?php
session_start();
include "conexion.php"; //importa la conexion

//Son los valores que llegan del formulario por medio de post
// el $correo es el nombre que le damos a la variable
$correo = $_POST["correo"];
$clave = $_POST["clave"];

$sql = "SELECT id, nombre, correo, clave, rol FROM usuarios WHERE correo='$correo' AND clave='$clave' ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    //creamos las variables de sesion
    $_SESSION["id"] = $row["id"];
    $_SESSION["nombre"] = $row["nombre"];
    $_SESSION["correo"] = $row["correo"];
    $_SESSION["rol"] = $row["rol"];
    header('Location: dashboard.php');// redireccionamos

  }
} else {
  echo "Usuario o contraseña incorrecta";
}
$conn->close();
?>