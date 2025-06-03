document.addEventListener('DOMContentLoaded', () => {
    verificarSesion();
});

function verificarSesion() {
    if (!sessionStorage.getItem('usuario')) {
        window.location.href = './login.html';
    }else{
        inicializarEventos();
        mostrarSalones();
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
    const salones = JSON.parse(localStorage.getItem('salones')) || [];
    const ultimoId = salones.length > 0 ? salones[salones.length - 1].id : 0;
    return {
        id: ultimoId + 1,
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
    let salones = JSON.parse(localStorage.getItem("salones"));
    if (salones === null) {
        listaSalones = [
        {
            id: 1,
            titulo: "Salón Fiesta 1",
            descripcion: "Un espacio ideal para celebrar momentos inolvidables con tus amigos y familiares.",
            imagen: "salon1.jpg",
        },
        {
            id: 2,
            titulo: "Salón Fiesta 2",
            descripcion: "Un espacio ideal para celebrar momentos inolvidables con tus amigos y familiares.",
            imagen: "salon2.jpg",
        },
        {
            id: 3,
            titulo: "Salón Fiesta 3",
            descripcion: "Un espacio ideal para celebrar momentos inolvidables con tus amigos y familiares.",
            imagen: "salon3.jpg",
        },
        {
            id: 4,
            titulo: "Salón Fiesta 4",
            descripcion: "Un espacio ideal para celebrar momentos inolvidables con tus amigos y familiares.",
            imagen: "salon1.jpg",
        }
        ];
        localStorage.setItem("salones", JSON.stringify(listaSalones));
    }
    
    const tablaBody = document.querySelector('#tablaSalones tbody');
    if (!tablaBody) return;

    tablaBody.innerHTML = '';

    salones = JSON.parse(localStorage.getItem('salones')) || [];
    let posicion = 0;
    salones.forEach(salon => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${salon.titulo}</td>
            <td>${salon.descripcion}</td>
            <td>${salon.imagen}</td>
            <td>
            <button type="submit" class="btn btn-warning" onClick="eventoModificar('${salon.titulo}','${salon.descripcion}','${salon.imagen}','${posicion}')">Modificar</button>
            <button type="submit" class="btn btn-danger" onClick="eventoEliminar('${salon.posicion}')">Eliminar</button>
            </td>
        `;
        tablaBody.appendChild(fila);
        posicion++;
    });
}

document.getElementById('btnCancelar')?.addEventListener('click', function (event) {
        document.getElementById('titulo').value = '';
        document.getElementById('descripcion').value = '';
        document.getElementById('imagen').value = 'salon1.jpg';
        document.getElementById('btnModificarSalon').style.visibility = 'hidden';
        document.getElementById('btnAgregarSalon').style.visibility = 'visible';
        document.getElementById('btnAgregarSalon').style.visibility = 'visible';
    });