import { listarsalones } from "./utils/abmsalones.js";
import { listarServicios } from "../js/utils/abmservicios.js";
import { calcularPrespuesto, iniciarPresupuesto } from "./utils/calculopresupuesto.js";

import { modal } from "./utils/popUp.js";

iniciarPresupuesto();
mostrarSalones(await listarsalones());
/**Carga los salones*/
function mostrarSalones(listaSalones_) {
    if(listaSalones_!=null){
        const selectSalones = document.getElementById('nombreSalon');
        let band = true;
        listaSalones_.forEach(salon => {
            const opcion = document.createElement('option');
            opcion.value = salon.valor;
            opcion.innerHTML = salon.titulo;
            if(band){
                document.getElementById('precioSalon').innerHTML = salon.valor;
                opcion.selected = true;
                band = false;
            }
            selectSalones.append(opcion);
    });
}}
/**Cargar fecha inicial*/
cargarFecha();
function cargarFecha(){
    document.getElementById('fecha').value = new Date().toISOString().substring(0, 10);
}
/**Muestra el precio del Salon*/
document.getElementById('nombreSalon').addEventListener('change',()=>{
    document.getElementById('precioSalon').innerHTML = document.getElementById('nombreSalon').value;
})
/***********************/
mostrarServicios(await listarServicios());
/**Carga los servicios*/
function mostrarServicios(listaServicios_) {
    if(listaServicios_!=null){
        const tablaServicio = document.getElementById('listaServicioTabla');
        tablaServicio.innerHTML = '';
        listaServicios_.forEach(servicio => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${servicio.descripcion}</td>
                <td>${servicio.valor}</td>
                <td>
                <input type="checkbox" class="w-100" onchange="import('./js/utils/calculopresupuesto.js').then(Module=>Module.selecServicioPresupuesto('${servicio.id}'))"/>
                </td>
            `;
            tablaServicio.append(fila);
    });
}}
/**********/
document.getElementById('btncalculo').addEventListener('click',()=>{
    if(document.getElementById('apellidoYnombre').value.trim()){
        const apellYnomb = document.getElementById('apellidoYnombre').value;
        const fecha = document.getElementById('fecha').value;
        let p = calcularPrespuesto(apellYnomb,fecha,obtenerdatosSalon());
        mostrarPresupuesto(p);
    }else{
        modal('Advertencia','Debe completar todos los campos',2);
    }
});

function obtenerdatosSalon(){
    var combo = document.getElementById("nombreSalon");
    var selected = combo.options[combo.selectedIndex].text;
    return {
        "titulo": selected,
        "valor": document.getElementById('nombreSalon').value,
    }
}

function mostrarPresupuesto(p){
    document.getElementById('apellidoYnombrePresupuesto').innerHTML = p.apellidoYnombre;
    document.getElementById('fechaPresupuesto').innerHTML = p.fecha;
    document.getElementById('salonPresupuesto').innerHTML = p.tematica;
    document.getElementById('salonPrecioPresupuesto').innerHTML = document.getElementById('precioSalon').innerHTML;
    document.getElementById('precioTotal').innerHTML = p.valorTotal;
    let tabla = document.getElementById('tablaServiciosBrindar');
    tabla.innerHTML = '';
    p.serviciosSeleccionados.forEach(item=>{
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.descripcion}</td>
            <td>${item.valor}</td>
            `;            
        tabla.appendChild(fila);
    });
}

document.getElementById('btnborrar').addEventListener('click',()=>{
    window.location.reload();
});