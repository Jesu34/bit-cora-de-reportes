<?php
include "conexion.php";

//Son los valores que llegan del formulario por medio de post
// el $correo es el nombre que le damos a la variable
$correo = $_POST["correo"];
$clave = $_POST["clave"];;

$sql = "SELECT id, nombre, correo, clave, rol FROM usuarios WHERE correo='$correo' AND clave='$clave' ";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "id: " . $row["id"]. " - nombre: " . $row["nombre"]. " " . $row["correo"]. "<br>";
  }
} else {
  echo "0 results";
}
$conn->close();
?>