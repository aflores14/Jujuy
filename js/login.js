function mostrarMensaje(mensaje, tipo = 'info') {
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.className = `alert alert-${tipo}`;
    mensajeDiv.innerText = mensaje;
}

function verificarSesion() {
    const usuario = sessionStorage.getItem('usuario');
    if (usuario) {
        document.getElementById('nombreUsuario').innerText = usuario;
        mostrarMensaje(`Bienvenido, ${usuario}`);
    } else {
        mostrarMensaje('Por favor, inicia sesión.\nUsuario: admin | Contraseña: admin', 'warning');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (sessionStorage.getItem("usuario")) {
        alert("Este usuario ya está logueado");
        window.location.href = "./gestionSalon.html";
    }
});

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const usuario = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("contrasena").value.trim();

    if (usuario === "admin" && pass === "admin") {
        sessionStorage.setItem("usuario", usuario);
        window.location.href = "./gestionSalon.html";
    } else {
        alert("Usuario incorrecto");
    }
});

window.onload = verificarSesion;