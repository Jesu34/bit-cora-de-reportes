<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Iniciar Sesión - Centro de Acopio</title>
    <link rel="stylesheet" href="css/LoginandRegister.css" />
  </head>
  <body>
    <div class="container">
      <div class="left-side">
        <div class="left-content">
          <p>Centro de Acopio</p>
        </div>
      </div>
      <div class="right-side">
        <div class="form-container">
          <div class="form-toggle">
            <button id="loginToggle" class="active">Iniciar Sesión</button>
            <button id="registerToggle">Registrarse</button>
          </div>
          <section id="loginForm" class="login-form active-form">
            <h2>Iniciar Sesión</h2>
            <!-- el action es el archivo al que va a llamar y mandar los parametros del formulario -->
            <form action="procesar_login.php" method="post" >
              <label for="email">Correo electrónico:</label>
              <input type="email" id="emailLogin" name="correo" required />

              <label for="password">Contraseña:</label>
              <input type="password" id="passwordLogin" name="clave" required />

              <button type="submit">Iniciar Sesión</button>
            </form>
          </section>
          <section id="registerForm" class="register-form">
            <h2>Registrarse</h2>
            <form action="guardar_usuario.php" method="post">
              <label for="nombre">Nombre:</label>
              <br />
              <input type="text" id="nombre" name="nombre" required />
                <br />
              <label for="email">Correo electrónico:</label>
              <input type="email" id="emailRegister" name="correo" required />

              <label for="password">Contraseña:</label>
              <input type="password" id="passwordRegister" name="clave" required />
                <br />
              <label for="rol">Rol:</label>
              <br />
              <select id="rol" name="rol" required>
                <option value="">Seleccionar rol</option>
                <option value="admin">Administrador</option>
                <option value="operador">Operador</option>
                <option value="supervisor">Supervisor</option>
              </select>

              <button type="submit">Registrarse</button>
            </form>
          </section>
        </div>
      </div>
    </div>

    <script src="js/toggleForms.js"></script>
  </body>
</html>
