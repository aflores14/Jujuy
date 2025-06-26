import { listarServicios } from "./utils/abmservicios.js";

cargarDatos(await listarServicios());

function cargarDatos(lista_){
    if(lista_!=null){
        let contenedor = document.getElementById("contenedorCards");
        lista_.forEach(element => {
            let servicio_ = document.createElement("h3");
            servicio_.innerHTML = element.descripcion;
            contenedor.appendChild(servicio_);
        });
    }
}