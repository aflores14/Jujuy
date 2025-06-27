import { listarServicios , agregarServicio, modificarServicio } from "../js/utils/abmservicios.js";
import { modal } from "../js/utils/popUp.js";


mostrarServicios(await listarServicios());

function mostrarServicios(listaServicios_) {
    if(listaServicios_!=null){
        const tablaBody = document.querySelector('#tablaServicios tbody');
        tablaBody.innerHTML = '';
        let posicion = 0;
        listaServicios_.forEach(servicio => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${servicio.descripcion}</td>
                <td>${servicio.valor}</td>
                <td>
                <button id="btnAgregarServicio" type="submit" class="btn btn-warning" onClick="import('../js/utils/abmservicios.js').then(Module=>Module.cargarModificarServicio('${servicio.descripcion}','${servicio.valor}','${posicion}'))">Modificar</button>
                <button type="submit" class="btn btn-danger" onClick="import('../js/utils/abmservicios.js').then(Module=>Module.eliminarServicio('${posicion}'))">Eliminar</button>
                </td>
            `;
            tablaBody.appendChild(fila);
            posicion++;
    });
}}
/*************************************/
document.getElementById('formServicio')?.addEventListener('submit', async function (event) {
        event.preventDefault();
        const servicio = await obtenerDatosFormulario();
        mostrarServicios(await agregarServicio(servicio));
        this.reset();
        modal('Confirmacion','Se guardo el servicio',1);
    });

function obtenerDatosFormulario() {
    return {
        id: document.getElementById('posicionModificar').value,
        descripcion: document.getElementById('descripcion')?.value || '',
        valor: document.getElementById('valor')?.value || '',
        selecprespuesto: "n"
    };
}

document.getElementById('btnCancelar')?.addEventListener('click', function (event) {
        borrardatos();
    });
function borrardatos(){
    document.getElementById('descripcion').value = '';
    document.getElementById('valor').value = '';
    document.getElementById('posicionModificar').value = '0';
    document.getElementById('btnModificarServicio').style.visibility = 'hidden';
    document.getElementById('btnAgregarServicio').style.visibility = 'visible';
    document.getElementById('btnAgregarServicio').style.visibility = 'visible';
}
/***********************************/
document.getElementById('btnModificarServicio')?.addEventListener('click', async function (event) {
        mostrarServicios(await modificarServicio(obtenerDatosFormulario()));
        borrardatos();
        modal('Confirmacion','Se actualizo el servicio',1);
    });