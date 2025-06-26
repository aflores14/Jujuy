const API_URL = 'https://dummyjson.com/auth/login';

document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('token')) {
    alert('Este usuario ya está logueado');
    window.location.href = './gestionSalon.html';
  }
  verificarSesion();
});

document.getElementById('loginForm').addEventListener('submit', async event => {
  event.preventDefault();

  const usuario = document.getElementById('usuario').value.trim();
  const contrasena = document.getElementById('contrasena').value.trim();

  const data = await loginAPI(usuario, contrasena);

  if (data?.accessToken) {
    sessionStorage.setItem('usuario', usuario);
    sessionStorage.setItem('token', data.accessToken);
    mostrarMensaje(`Bienvenido, ${usuario}`, 'success');
    window.location.href = './gestionSalon.html';
  } else {
    mostrarMensaje('Usuario o contraseña incorrectos', 'danger');
  }
});

async function loginAPI(username, password) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) throw new Error('Credenciales incorrectas');
    return await response.json();
  } catch (error) {
    console.error('Error en Login:', error.message);
    return null;
  }
}

function mostrarMensaje(mensaje, tipo = 'info') {
  const div = document.getElementById('mensaje');
  if (div) {
    div.className = `alert alert-${tipo}`;
    div.innerText = mensaje;
  }
}

function verificarSesion() {
  const usuario = sessionStorage.getItem('usuario');
  const nombreSpan = document.getElementById('nombreUsuario');
  if (usuario && nombreSpan) {
    nombreSpan.innerText = usuario;
    mostrarMensaje(`Bienvenido, ${usuario}`);
  } else {
    mostrarMensaje('Por favor, inicia sesión.', 'warning');
  }
}