import {modal} from './popUp.js';

async function cargaInicial(){
    try{
        const response = await fetch('./utils/servicios.json');
        if(!response.ok){
            modal("Error de carga","No se pudo cargar los servicios",0);
            return [];  
        }else{
            const respuesta = await response.json();
            return respuesta.listadoServicios;
        }
    }catch(error){
            console.log(error);
            return [];
    }
}

export async function listarServicios(){    
    let lista = JSON.parse(localStorage.getItem("servicios"));
    if (lista === null) {
        const l = await cargaInicial();
        localStorage.setItem("servicios", JSON.stringify(l));
        const ll = JSON.parse(localStorage.getItem("servicios"));
        return ll;
    }else{
        return lista;
    }
}

export function agregarServicio(servicio){
    let lista = JSON.parse(localStorage.getItem("servicios"));
    servicio.id = lista.length;
    lista.push(servicio);
    localStorage.setItem("servicios", JSON.stringify(lista));
    return listarServicios();
}

export function cargarModificarServicio(descripcion,valor,posicion){
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('valor').value = valor;
    document.getElementById('posicionModificar').value = posicion;
    document.getElementById('btnModificarServicio').style.visibility = 'visible';
    document.getElementById('btnAgregarServicio').style.visibility = 'hidden';
    
    document.getElementById('descripcion').focus();
    return 0;
}

export function modificarServicio(servicio){
    let lista = JSON.parse(localStorage.getItem("servicios"));
    lista[servicio.id].descripcion = servicio.descripcion;
    lista[servicio.id].valor = servicio.valor;
    localStorage.setItem("servicios", JSON.stringify(lista));
    return listarServicios();
}

export function eliminarServicio(posicion){
    let lista = JSON.parse(localStorage.getItem("servicios"));
    // Confirmación antes de eliminar
    if (confirm("¿Seguro que deseas eliminar el servicio?")) {
        lista.splice(posicion, 1); // Elimina el elemento en la posición indicada
        localStorage.setItem("servicios", JSON.stringify(lista));
    }
    location.reload();
}