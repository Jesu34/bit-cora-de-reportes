// Reports.js

document.addEventListener('DOMContentLoaded', function() {
    // Configuración
    const API_BASE_URL = 'http://localhost:8080/api'; // Ajusta según tu configuración de Spring Boot
    const REPORTES_ENDPOINT = `${API_BASE_URL}/reportes`;

    // Elementos del DOM
    const reportesTable = document.getElementById('reportesTable');
    const logoutButton = document.getElementById('logout');

    // Funciones principales
    function inicializarPagina() {
        cargarReportes();
        configurarEventListeners();
    }

    function cargarReportes() {
        fetch(REPORTES_ENDPOINT)
            .then(response => response.json())
            .then(data => mostrarReportes(data))
            .catch(error => manejarError('Error al cargar reportes', error));
    }

    function mostrarReportes(reportes) {
        const tbody = reportesTable.querySelector('tbody');
        tbody.innerHTML = '';
        reportes.forEach(reporte => {
            const row = crearFilaReporte(reporte);
            tbody.appendChild(row);
        });
    }

    function crearFilaReporte(reporte) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${reporte.id}</td>
            <td>${formatearFecha(reporte.fecha)}</td>
            <td>${reporte.tipo}</td>
            <td>${reporte.descripcion}</td>
            <td>
                <button onclick="editarReporte(${reporte.id})">Editar</button>
                <button onclick="eliminarReporte(${reporte.id})">Eliminar</button>
            </td>
        `;
        return row;
    }

    function editarReporte(id) {
        // Implementar lógica de edición
        console.log(`Editando reporte con ID: ${id}`);
    }

    function eliminarReporte(id) {
        if (confirm('¿Estás seguro de que quieres eliminar este reporte?')) {
            fetch(`${REPORTES_ENDPOINT}/${id}`, { method: 'DELETE' })
                .then(response => {
                    if (response.ok) {
                        cargarReportes(); // Recargar la lista después de eliminar
                    } else {
                        throw new Error('Error al eliminar el reporte');
                    }
                })
                .catch(error => manejarError('Error al eliminar reporte', error));
        }
    }

    function configurarEventListeners() {
        logoutButton.addEventListener('click', cerrarSesion);
    }

    function cerrarSesion(event) {
        event.preventDefault();
        // Implementar lógica de cierre de sesión
        console.log('Cerrando sesión...');
        // Redirigir a la página de login después de cerrar sesión
        // window.location.href = 'login.html';
    }

    // Funciones auxiliares
    function formatearFecha(fecha) {
        return new Date(fecha).toLocaleDateString('es-ES');
    }

    function manejarError(mensaje, error) {
        console.error(mensaje, error);
        alert(`${mensaje}. Por favor, intenta de nuevo más tarde.`);
    }

    // Inicializar la página
    inicializarPagina();
});

// Funciones globales (si es necesario acceder desde HTML)
window.editarReporte = function(id) {
    console.log(`Editando reporte con ID: ${id}`);
    // Implementar lógica de edición (por ejemplo, abrir un modal)
};

window.eliminarReporte = function(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este reporte?')) {
        fetch(`${API_BASE_URL}/reportes/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    location.reload(); // Recargar la página después de eliminar
                } else {
                    throw new Error('Error al eliminar el reporte');
                }
            })
            .catch(error => console.error('Error:', error));
    }
};