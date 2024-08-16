// activities.js

document.addEventListener('DOMContentLoaded', function() {
    loadActividades();

    document.getElementById('actividadForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveActividad();
    });
});

function loadActividades() {
    // Aquí deberías hacer una llamada a tu API para obtener las actividades
    const actividades = [
        { id: 1, nombre: 'Carga de carbón', descripcion: 'Proceso de carga de carbón en camiones' },
        { id: 2, nombre: 'Descarga de carbón', descripcion: 'Proceso de descarga de carbón de vagones' },
        { id: 3, nombre: 'Mantenimiento de equipos', descripcion: 'Mantenimiento preventivo de maquinaria' }
    ];

    const tableBody = document.querySelector('#actividadesTable tbody');
    tableBody.innerHTML = '';

    actividades.forEach(actividad => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${actividad.id}</td>
            <td>${actividad.nombre}</td>
            <td>${actividad.descripcion}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="editActividad(${actividad.id})">Editar</button>
                    <button class="delete-btn" onclick="deleteActividad(${actividad.id})">Eliminar</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function saveActividad() {
    const id = document.getElementById('actividadId').value;
    const nombre = document.getElementById('nombreActividad').value;
    const descripcion = document.getElementById('descripcionActividad').value;

    // Aquí deberías hacer una llamada a tu API para guardar la actividad
    console.log('Guardando actividad:', { id, nombre, descripcion });

    // Después de guardar, recarga la lista de actividades
    loadActividades();
    resetForm();
}

function editActividad(id) {
    // Aquí deberías hacer una llamada a tu API para obtener los detalles de la actividad
    const actividad = { id: id, nombre: 'Actividad ' + id, descripcion: 'Descripción de la actividad ' + id };

    document.getElementById('actividadId').value = actividad.id;
    document.getElementById('nombreActividad').value = actividad.nombre;
    document.getElementById('descripcionActividad').value = actividad.descripcion;
}

function deleteActividad(id) {
    if (confirm('¿Estás seguro de que quieres eliminar esta actividad?')) {
        // Aquí deberías hacer una llamada a tu API para eliminar la actividad
        console.log('Eliminando actividad:', id);

        // Después de eliminar, recarga la lista de actividades
        loadActividades();
    }
}

function resetForm() {
    document.getElementById('actividadId').value = '';
    document.getElementById('nombreActividad').value = '';
    document.getElementById('descripcionActividad').value = '';
}
