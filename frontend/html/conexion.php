<?php 
$servername = "localhost";
$username = "root"; // es el usuario por defecto de xampp
$password = ""; //por defecto el usuario de xampp no tiene clave
$dbname = "bitacora";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>