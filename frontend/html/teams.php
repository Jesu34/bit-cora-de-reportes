<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Equipos - Centro de Acopio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body style background="Imagenes/foto 3.jpg">
    <header>
        <nav>
            <div class="logo">Centro de Acopio</div>
            <ul>
                <li><a href="dashboard.php">Dashboard</a></li>
                <li><a href="reports.html">Reportes</a></li>
                <li><a href="activities.html">Actividades</a></li>
                <li><a href="teams.html">Equipos</a></li>
                <li><a href="materials.html">Materiales</a></li>
                <li><a href="users.html">Usuarios</a></li>
                <li><a href="index.html">Cerrar Sesión</a></li>
            </ul>
        </nav>
    </header>

    <main class="container">
        <h1>Gestión de Equipos</h1>
        
        <section class="form-section">
            <h2>Agregar/Editar Equipo</h2>
            <form id="equipoForm" action="guardar-equipo.php" method="post" >
                <input type="hidden" id="equipoId">
                <label for="nombreEquipo">Nombre:</label>
                <input type="text" id="nombreEquipo" name="nombreEquipo" required>
                <label for="descripcionEquipo">Descripción:</label>
                <textarea id="descripcionEquipo" rows="3" name="descripcionEquipo" ></textarea>
                <label for="estadoEquipo">Estado:</label>
                <select id="estadoEquipo" name="estadoEquipo" required>
                    <option value="operativo">Operativo</option>
                    <option value="en mantenimiento">En mantenimiento</option>
                    <option value="fuera de servicio">Fuera de servicio</option>
                </select>
                <button type="submit">Guardar Equipo</button>
            </form>
        </section>

        <section class="table-section">
            <h2>Lista de Equipos</h2>
            <table id="equiposTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Aquí se cargarán dinámicamente los equipos -->
                    <?php
                include "conexion.php"; //importa la conexion
                $sql = "SELECT id, nombreEquipo, descripcionEquipo, estadoEquipo FROM equipos";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row["id"] . "</td>";
                        echo "<td>" . $row["nombreEquipo"] . "</td>";
                        echo "<td>" . $row["descripcionEquipo"] . "</td>";
                        echo "<td>" . $row["estadoEquipo"] . "</td>";
                        echo "</tr>";
                    }
                } else {
                    echo "0 results";
                }
                $conn->close();
                ?>
                </tbody>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Bitacora de Actividades del Centro de Acopio de Carbón Térmico. Todos los derechos reservados.</p>
    </footer>

</body>
</html>