import { listarsalones, agregarsalon, modificarsalon} from "../js/utils/abmsalones.js";
import { modal } from "../js/utils/popUp.js";

import { listarServicios } from "./utils/abmservicios.js";
import { listarimagenes } from "./utils/abmsalones.js";
listarimagenes();
listarServicios();

mostrarSalones(await listarsalones());

function mostrarSalones(listaSalones_) {
    if(listaSalones_!=null){
        const tablaBody = document.querySelector('#tablaSalones tbody');
        tablaBody.innerHTML = '';
        let posicion = 0;
        listaSalones_.forEach(salon => {
            const fila = document.createElement('tr');
            let descripcion = "";
            if(salon.descripcion.length>70){
                descripcion = salon.descripcion.substring(0, 70) + '...';
            }else{
                descripcion = salon.descripcion;
            }
            fila.innerHTML = `
                <td>${salon.titulo}</td>
                <td>${descripcion}</td>
                <td>${salon.direccion}</td>
                <td>
                <button id="btnAgregarModificar" type="submit" class="btn btn-warning" onClick="import('./js/utils/abmsalones.js').then(Module=>Module.cargarmodificarsalon('${salon.titulo}','${salon.descripcion}','${salon.id}','${salon.valor}','${salon.estado}','${salon.direccion}'))">Modificar</button>
                <button type="submit" class="btn btn-danger" onClick="import('./js/utils/abmsalones.js').then(Module=>Module.eliminarsalon('${salon.id}'))">Eliminar</button>
                </td>
            `;            
            tablaBody.appendChild(fila);
            posicion++;
    });
}}
/*************************************/
document.getElementById('imagenFile')?.addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const base64 = e.target.result;
        document.getElementById('imagen').value = base64;
        const preview = document.getElementById('imagenPreview');
        preview.src = base64;
        preview.classList.remove('d-none');
      };
      reader.readAsDataURL(file);
    }
  });
/*************************************/
document.getElementById('formSalon')?.addEventListener('submit', async function (event) {
        event.preventDefault();
        const salon = await obtenerDatosFormulario();
        mostrarSalones(await agregarsalon(salon,document.getElementById('imagen')?.value));
        this.reset();
        limpiarImagen();
        modal('Confirmacion','Se guardo el salon',1);
    });
function limpiarImagen() {
  document.getElementById('imagen').value = '';
  document.getElementById('imagenFile').value = '';
  document.getElementById('imagenPreview').classList.add('d-none');
  document.getElementById('imagenPreview').src = '';
}

function obtenerDatosFormulario() {
    const salones = JSON.parse(localStorage.getItem('salones')) || [];
    const ultimoId = salones.length > 0 ? salones[salones.length - 1].id : 0;
    return {
        id: ultimoId + 1,
        titulo: document.getElementById('titulo')?.value || '',
        descripcion: document.getElementById('descripcion')?.value || '',
        valor: document.getElementById('precio')?.value || '',
        direccion: document.getElementById('direccion')?.value || '',
        estado : document.getElementById('estado').value
    };
}

document.getElementById('btnCancelar')?.addEventListener('click', function (event) {
        limpiarImagen();
        borrardatos();
    });
function borrardatos(){
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('precio').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('imagen').value = 'salon1.jpg';
    document.getElementById('btnModificarSalon').style.visibility = 'hidden';
    document.getElementById('btnAgregarSalon').style.visibility = 'visible';
    document.getElementById('btnAgregarSalon').style.visibility = 'visible';
    document.getElementById('estado').disabled = true;
    document.getElementById('estado').value = "disponible";
}
/***********************************/
document.getElementById('btnModificarSalon')?.addEventListener('click', async function (event) {
        mostrarSalones(await modificarsalon(document.getElementById('titulo').value,document.getElementById('descripcion').value,document.getElementById('imagen').value,document.getElementById('precio').value,document.getElementById('estado').value,document.getElementById('direccion').value));
        borrardatos();
        modal('Confirmacion','Se actualizo el salon',1);
    });