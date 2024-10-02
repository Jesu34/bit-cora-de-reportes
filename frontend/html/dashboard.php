<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard - Centro de Acopio</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body style background="Imagenes/foto 1.jpg">
    <header>
        <nav>
            <div class="logo">Centro de Acopio</div>
            <ul>
                <li><a href="dashboard.php">Dashboard</a></li>
                <li><a href="trabajadores.php">Trabajadores</a></li>
                <li><a href="reports.html">Reportes</a></li>
                <li><a href="activities.php">Actividades</a></li>
                <li><a href="teams.php">Equipos</a></li>
                <li><a href="materials.php">Materiales</a></li>
                <li><a href="index.html">Cerrar Sesión</a></li>
            </ul>
        </nav>
    </header>

    <?php
    require "main.php";
    ?>

    <section class="recent-reports">
        <h2>Reportes Recientes</h2>
        <table id="recentReportsTable">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Fecha</th>
                    <th>Usuario</th>
                    <th>Actividad</th>
                </tr>
            </thead>
            <tbody>
                <!-- Aquí se cargarán dinámicamente los reportes recientes -->
            </tbody>
        </table>
    </section>

    <footer>
        <p>&copy; 2024 Bitacora de Actividades del Centro de Acopio de Carbón Térmico. Todos los derechos reservados.</p>
    </footer>

    <script src="js/dashboard.js"></script>
</body>

</html>