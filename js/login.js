// Función para mostrar mensaje
function mostrarMensaje(mensaje, tipo = 'info') {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.className = `alert alert-${tipo}`;
    mensajeDiv.innerText = mensaje;
}

// Función para actualizar vista
function verificarSesion() {
    const usuario = sessionStorage.getItem('usuario');
    if (usuario) {
        document.getElementById('nombreUsuario').innerText = usuario;
        mostrarMensaje(`Bienvenido, ${usuario}`);
    } else {
        mostrarMensaje('Por favor, inicia sesión');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("usuario")) {
        alert("Este usuario ya está logueado");
        window.location.href = "./altaSalon.html";
    }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("contrasena").value.trim();

    if (usuario === "admin" && pass === "admin") {
        sessionStorage.setItem("usuario", usuario);
        window.location.href = "./altaSalon.html";
    } else {
        alert("Usuario incorrecto");
    }
});

window.onload = verificarSesion;