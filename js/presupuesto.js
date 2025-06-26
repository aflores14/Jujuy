import { listarsalones } from "./utils/abmsalones.js";
import { listarServicios } from "../js/utils/abmservicios.js";
//import { calcularPrespuesto, obtenerDatosServicios } from "./utils/calculopresupuesto.js";

import { modal } from "./utils/popUp.js";


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
                document.getElementById('precioTotal').innerHTML = salon.valor; 
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
                <input id="${servicio.id}" type="checkbox" class="w-100"/>
                </td>
            `;
            tablaServicio.append(fila);
    });
}}
/**********/
document.getElementById('btncalculo').addEventListener('click',()=>{
    if(document.getElementById('apellidoYnombre').value.trim()){
        const apellYnomb = document.getElementById('apellidoYnombre');
        const fecha = document.getElementById('fecha').value;
        //actualizarPresupuesto(apellYnomb,fecha,obtenerdatosSalon(),obtenerServiciosSeleccionados());
        console.log(obtenerDatosServicios(obtenerServiciosSeleccionados()));
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
function obtenerServiciosSeleccionados(){
    
        const tabla_ = document.getElementById('listaServicioTabla');
        if(tabla_.rows.length>0){
            let indices = [];
            const listacheckbox = document.querySelectorAll('#listaServicioTabla input[type="checkbox"]');
            listacheckbox.forEach(check_=>{
                if(check_.checked){
                    indices.push(check_.id);
                }
            });
            return indices
        }else{
            return [];
        }   
}

async function obtenerDatosServicios(indices){
    const l = await listarServicios();
    let laux = [];
    l.forEach(item=>{
        indices.forEach(valor=>{
            if(item.id == valor){
                laux.push(item);
            }
        });
    });
    return laux;
}