// materiales.js

document.addEventListener('DOMContentLoaded', function() {
    loadMateriales();

    document.getElementById('materialForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveMaterial();
    });
});

function loadMateriales() {
    // Aquí deberías hacer una llamada a tu API para obtener los materiales
    const materiales = [
        { id: 1, nombre: 'Carbón', cantidad: 500, unidad: 'Toneladas' },
        { id: 2, nombre: 'Hierro', cantidad: 300, unidad: 'Toneladas' },
        { id: 3, nombre: 'Cobre', cantidad: 100, unidad: 'Toneladas' }
    ];

    const tableBody = document.querySelector('#materialesTable tbody');
    tableBody.innerHTML = '';

    materiales.forEach(material => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${material.id}</td>
            <td>${material.nombre}</td>
            <td>${material.cantidad}</td>
            <td>${material.unidad}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="editMaterial(${material.id})">Editar</button>
                    <button class="delete-btn" onclick="deleteMaterial(${material.id})">Eliminar</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function saveMaterial() {
    const id = document.getElementById('materialId').value;
    const nombre = document.getElementById('nombreMaterial').value;
    const cantidad = document.getElementById('cantidadMaterial').value;
    const unidad = document.getElementById('unidadMaterial').value;

    // Aquí deberías hacer una llamada a tu API para guardar el material
    console.log('Guardando material:', { id, nombre, cantidad, unidad });

    // Después de guardar, recarga la lista de materiales
    loadMateriales();
    resetForm();
}

function editMaterial(id) {
    // Aquí deberías hacer una llamada a tu API para obtener los detalles del material
    const material = { id: id, nombre: 'Material ' + id, cantidad: 100, unidad: 'Toneladas' };

    document.getElementById('materialId').value = material.id;
    document.getElementById('nombreMaterial').value = material.nombre;
    document.getElementById('cantidadMaterial').value = material.cantidad;
    document.getElementById('unidadMaterial').value = material.unidad;
}

function deleteMaterial(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este material?')) {
        // Aquí deberías hacer una llamada a tu API para eliminar el material
        console.log('Eliminando material:', id);

        // Después de eliminar, recarga la lista de materiales
        loadMateriales();
    }
}

function resetForm() {
    document.getElementById('materialId').value = '';
    document.getElementById('nombreMaterial').value = '';
    document.getElementById('cantidadMaterial').value = '';
    document.getElementById('unidadMaterial').value = 'Toneladas';
}
