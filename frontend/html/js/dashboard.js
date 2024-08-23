// dashboard.js

// Función para cargar los reportes recientes
function loadRecentReports() {
    // Aquí deberías hacer una llamada a tu API para obtener los reportes recientes
    const recentReports = [
        { id: 1, fecha: '2023-08-08', usuario: 'Juan Pérez', actividad: 'Carga de carbón' },
        { id: 2, fecha: '2023-08-07', usuario: 'María García', actividad: 'Mantenimiento de equipo' },
        { id: 3, fecha: '2023-08-06', usuario: 'Carlos Rodríguez', actividad: 'Inspección de material' },
    ];

    const tableBody = document.getElementById('recentReportsTable');
    tableBody.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Usuario</th>
            <th>Actividad</th>
        </tr>
    `;

    recentReports.forEach(report => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${report.id}</td>
            <td>${report.fecha}</td>
            <td>${report.usuario}</td>
            <td>${report.actividad}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Función para cargar el resumen del dashboard
function loadDashboardSummary() {
    // Aquí deberías hacer una llamada a tu API para obtener los datos del resumen
    const summary = {
        totalReportes: 150,
        reportesHoy: 12,
        equiposActivos: 8,
        materialesProcesados: 1000
    };

    const summarySection = document.querySelector('.summary');
    summarySection.innerHTML = `
        <div class="summary-card">
            <h3>Total Reportes</h3>
            <p>${summary.totalReportes}</p>
        </div>
        <div class="summary-card">
            <h3>Reportes Hoy</h3>
            <p>${summary.reportesHoy}</p>
        </div>
        <div class="summary-card">
            <h3>Equipos Activos</h3>
            <p>${summary.equiposActivos}</p>
        </div>
        <div class="summary-card">
            <h3>Materiales Procesados (Ton)</h3>
            <p>${summary.materialesProcesados}</p>
        </div>
    `;
}

// Manejar el cierre de sesión
function handleLogout() {
    document.getElementById('logout').addEventListener('click', function(e) {
        e.preventDefault();
        // Aquí deberías hacer una llamada a tu API para cerrar la sesión
        console.log('Cerrando sesión');
        // Redirigir a la página de inicio
        window.location.href = 'index.html';
    });
}

// Cargar datos al iniciar la página
document.addEventListener('DOMContentLoaded', function() {
    loadRecentReports();
    loadDashboardSummary();
    handleLogout();
});
