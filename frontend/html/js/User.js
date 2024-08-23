// usuarios.js

document.addEventListener('DOMContentLoaded', function() {
    loadUsuarios();

    document.getElementById('usuarioForm').addEventListener('submit', function(e) {
        e.preventDefault();
        saveUsuario();
    });
});

function loadUsuarios() {
    // Aquí deberías hacer una llamada a tu API para obtener los usuarios
    const usuarios = [
        { id: 1, nombre: 'Juan Pérez', email: 'juan@example.com', rol: 'Administrador' },
        { id: 2, nombre: 'María García', email: 'maria@example.com', rol: 'Operador' },
        { id: 3, nombre: 'Carlos Rodríguez', email: 'carlos@example.com', rol: 'Supervisor' }
    ];

    const tableBody = document.querySelector('#usuariosTable tbody');
    tableBody.innerHTML = '';

    usuarios.forEach(usuario => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.email}</td>
            <td>${usuario.rol}</td>
            <td>
                <div class="action-buttons">
                    <button class="edit-btn" onclick="editUsuario(${usuario.id})">Editar</button>
                    <button class="delete-btn" onclick="deleteUsuario(${usuario.id})">Eliminar</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function saveUsuario() {
    const id = document.getElementById('usuarioId').value;
    const nombre = document.getElementById('nombreUsuario').value;
    const email = document.getElementById('emailUsuario').value;
    const rol = document.getElementById('rolUsuario').value;

    // Aquí deberías hacer una llamada a tu API para guardar el usuario
    console.log('Guardando usuario:', { id, nombre, email, rol });

    // Después de guardar, recarga la lista de usuarios
    loadUsuarios();
    resetForm();
}

function editUsuario(id) {
    // Aquí deberías hacer una llamada a tu API para obtener los detalles del usuario
    const usuario = { id: id, nombre: 'Usuario ' + id, email: 'usuario' + id + '@example.com', rol: 'Operador' };

    document.getElementById('usuarioId').value = usuario.id;
    document.getElementById('nombreUsuario').value = usuario.nombre;
    document.getElementById('emailUsuario').value = usuario.email;
    document.getElementById('rolUsuario').value = usuario.rol;
}

function deleteUsuario(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
        // Aquí deberías hacer una llamada a tu API para eliminar el usuario
        console.log('Eliminando usuario:', id);

        // Después de eliminar, recarga la lista de usuarios
        loadUsuarios();
    }
}

function resetForm() {
    document.getElementById('usuarioId').value = '';
    document.getElementById('nombreUsuario').value = '';
    document.getElementById('emailUsuario').value = '';
    document.getElementById('rolUsuario').value = 'Operador';
}
