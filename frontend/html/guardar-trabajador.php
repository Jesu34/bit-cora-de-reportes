<?php
include "conexion.php"; //importa la conexion

$nombre_apellidos = $_POST["nombre_apellidos"];
$telefono = $_POST["telefono"];
$cedula = $_POST["cedula"];

$sql = "INSERT INTO trabajadores (nombre_apellidos, telefono, cedula)
VALUES ('$nombre_apellidos', '$telefono', '$cedula')";

if ($conn->query($sql) === TRUE) {
  echo "Trabajador creado <a href='trabajadores.php'>Volver</a> ";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>