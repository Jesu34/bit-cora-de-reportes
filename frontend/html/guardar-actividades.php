<?php
include "conexion.php"; //importa la conexion

$nombreActividad = $_POST["nombreActividad"];
$descripcionActividad = $_POST["descripcionActividad"];

$sql = "INSERT INTO actividades (nombreActividad, descripcionActividad)
VALUES ('$nombreActividad', '$descripcionActividad')";

if ($conn->query($sql) === TRUE) {
  echo "Actividad creada creado <a href='activities.php'>Volver</a> ";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>