// login y register

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Aquí deberías hacer una llamada a tu API para autenticar al usuario
    console.log('Iniciando sesión con:', { email, password });

    // Si la autenticación es exitosa, redirige al dashboard
    // window.location.href = 'dashboard.html';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rol = document.getElementById('rol').value;

    // Aquí deberías hacer una llamada a tu API para registrar al usuario
    console.log('Registrando usuario:', { nombre, email, password, rol });

    // Si el registro es exitoso, redirige a la página de inicio de sesión
    // window.location.href = 'login.html';
});

document.getElementById('logout').addEventListener('click', function(e) {
    e.preventDefault();
    // Aquí deberías hacer una llamada a tu API para cerrar la sesión
    console.log('Cerrando sesión');
    // Redirigir a la página de inicio
    // window.location.href = 'index.html';
});
