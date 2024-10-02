<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Actividades - Centro de Acopio</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body style background="Imagenes/foto 7.jpg">
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
        <h1>Gestión de Actividades</h1>
        
        <section class="form-section">
            <h2>Agregar/Editar Actividad</h2>
            <form id="actividadForm" action="guardar-actividades.php" method="post" >
                <input type="hidden" id="actividadId">
                <label for="nombreActividad">Nombre:</label>
                <input type="text" id="nombreActividad" name="nombreActividad" required>
                <label for="descripcionActividad">Descripción:</label>
                <textarea id="descripcionActividad" name="descripcionActividad" rows="3"></textarea>
                <button type="submit">Guardar Actividad</button>
            </form>
        </section>

        <section class="table-section">
            <h2>Lista de Actividades</h2>
            <table id="actividadesTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Aquí se cargarán dinámicamente las actividades -->
                    <?php
                include "conexion.php"; //importa la conexion
                $sql = "SELECT id, nombreActividad, descripcionActividad, fecha FROM actividades";
                $result = $conn->query($sql);

                if ($result->num_rows > 0) {
                    // output data of each row
                    while ($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        echo "<td>" . $row["id"] . "</td>";
                        echo "<td>" . $row["nombreActividad"] . "</td>";
                        echo "<td>" . $row["descripcionActividad"] . "</td>";
                        echo "<td>" . $row["fecha"] . "</td>";
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
        <p>&copy; 2023 Centro de Acopio de Carbón Térmico. Todos los derechos reservados.</p>
    </footer>

</body>
</html>