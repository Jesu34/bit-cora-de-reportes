<?php
include "conexion.php"; //importa la conexion

$nombreMaterial = $_POST["nombreMaterial"];
$descripcionMaterial = $_POST["descripcionMaterial"];

$sql = "INSERT INTO materiales (nombreMaterial, descripcionMaterial)
VALUES ('$nombreMaterial', '$descripcionMaterial')";

if ($conn->query($sql) === TRUE) {
  echo "Material creada creado <a href='materials.php'>Volver</a> ";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>