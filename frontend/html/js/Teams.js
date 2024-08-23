// equipos.js

document.addEventListener('DOMContentLoaded', function() {
    loadEquipos();

    document.getElementById('equipoForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveEquipo();
    });
});

function loadEquipos() {
    // Aquí deberías hacer una llamada a tu API para obtener los equipos
    const equipos = [
        { id: 1, nombre: 'Cargador frontal', descripcion: 'Cargador de gran capacidad', estado: 'operativo' },
        { id: 2, nombre: 'Banda transportadora', descripcion: 'Sistema de transporte de carbón', estado: 'en mantenimiento' },
        { id: 3, nombre: 'Báscula', descripcion: 'Sistema de pesaje de camiones', estado: 'operativo' }
    ];

    const tableBody = document.querySelector('#equiposTable tbody');
    tableBody.innerHTML = '';

    equipos.forEach(equipo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${equipo.id}</td>
            <td>${equipo.nombre}</td>
            <td>${equipo.descripcion}</td>
            <td>${equipo.estado}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="editEquipo(${equipo.id})">Editar</button>
                    <button class="delete-btn" onclick="deleteEquipo(${equipo.id})">Eliminar</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function saveEquipo() {
    const id = document.getElementById('equipoId').value;
    const nombre = document.getElementById('nombreEquipo').value;
    const descripcion = document.getElementById('descripcionEquipo').value;
    const estado = document.getElementById('estadoEquipo').value;

    // Aquí deberías hacer una llamada a tu API para guardar el equipo
    console.log('Guardando equipo:', { id, nombre, descripcion, estado });

    // Después de guardar, recarga la lista de equipos
    loadEquipos();
    resetForm();
}

function editEquipo(id) {
    // Aquí deberías hacer una llamada a tu API para obtener los detalles del equipo
    const equipo = { id: id, nombre: 'Equipo ' + id, descripcion: 'Descripción del equipo ' + id, estado: 'operativo' };

    document.getElementById('equipoId').value = equipo.id;
    document.getElementById('nombreEquipo').value = equipo.nombre;
    document.getElementById('descripcionEquipo').value = equipo.descripcion;
    document.getElementById('estadoEquipo').value = equipo.estado;
}

function deleteEquipo(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este equipo?')) {
        // Aquí deberías hacer una llamada a tu API para eliminar el equipo
        console.log('Eliminando equipo:', id);

        // Después de eliminar, recarga la lista de equipos
        loadEquipos();
    }
}

function resetForm() {
    document.getElementById('equipoId').value = '';
    document.getElementById('nombreEquipo').value = '';
    document.getElementById('descripcionEquipo').value = '';
    document.getElementById('estadoEquipo').value = 'operativo';
}
