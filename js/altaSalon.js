document.addEventListener('DOMContentLoaded', () => {
    verificarSesion();
    inicializarEventos();
    mostrarSalones();
});

function verificarSesion() {
    if (!sessionStorage.getItem('usuario')) {
        window.location.href = './login.html';
    }
}

function inicializarEventos() {
    document.getElementById('logout')?.addEventListener('click', cerrarSesion);

    document.getElementById('formSalon')?.addEventListener('submit', function (event) {
        event.preventDefault();

        const salon = obtenerDatosFormulario();

        guardarSalon(salon);

        this.reset();
        mostrarSalones();
    });
}

function cerrarSesion() {
    sessionStorage.clear();
    window.location.href = './login.html';
}

function obtenerDatosFormulario() {
    return {
        titulo: document.getElementById('titulo')?.value || '',
        descripcion: document.getElementById('descripcion')?.value || '',
        imagen: document.getElementById('imagen')?.value || ''
    };
}

function guardarSalon(salon) {
    const salones = JSON.parse(localStorage.getItem('salones')) || [];
    salones.push(salon);
    localStorage.setItem('salones', JSON.stringify(salones));
}

function mostrarSalones() {
    const tablaBody = document.querySelector('#tablaSalones tbody');
    if (!tablaBody) return; // Evita errores si la tabla no existe

    tablaBody.innerHTML = '';

    const salones = JSON.parse(localStorage.getItem('salones')) || [];

    salones.forEach(salon => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${salon.titulo}</td>
            <td>${salon.descripcion}</td>
            <td>${salon.imagen}</td>
        `;
        tablaBody.appendChild(fila);
    });

}