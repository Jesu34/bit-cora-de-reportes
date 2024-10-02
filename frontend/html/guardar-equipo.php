<?php
include "conexion.php"; //importa la conexion

$nombreEquipo = $_POST["nombreEquipo"];
$descripcionEquipo = $_POST["descripcionEquipo"];
$estadoEquipo = $_POST["estadoEquipo"];

$sql = "INSERT INTO equipos (nombreEquipo, descripcionEquipo, estadoEquipo)
VALUES ('$nombreEquipo', '$descripcionEquipo', '$estadoEquipo')";

if ($conn->query($sql) === TRUE) {
  echo "Equipo creado <a href='teams.php'>Volver</a> ";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>