import { listarsalones, listarimagenes } from "./utils/abmsalones.js";

cargarDatos(await listarsalones(), await listarimagenes());

function buscarImagen(listaI_,idsalon_){
    let ruta = "./assets/img/salon1.jpg";
    listaI_.forEach(item=>{
        if(item.idsalon==idsalon_){
            ruta = item.ruta;
        }
    });
    return ruta;
}

function cargarDatos(listaS_,listaI_){
    if(listaS_!=null){
        let contenedor = document.getElementById("contenedorCards");
        listaS_.forEach(element => {
            let divContenedorCard = document.createElement("div");
            divContenedorCard.className = "col-12 col-sm-6 col-lg-3";
            let divContenedor = document.createElement("div");
            divContenedor.className = "card h-100";
            let imagen = document.createElement("img");
            imagen.className = "card-img-top";
            let ruta = buscarImagen(listaI_,element.id);
            imagen.src =ruta;
            imagen.alt = "Imagen Salon";
            let divContenedorCuerpo = document.createElement("div");
            divContenedorCuerpo.className = "card-body";
            let titulo = document.createElement("h5");
            titulo.className = "card-title";
            titulo.innerHTML = element.titulo;
            let parrafo = document.createElement("p");
            parrafo.className = "card-text";
            parrafo.innerHTML = element.descripcion;
            let botonMas = document.createElement("a");
            botonMas.className = "btn btn-warning";
            botonMas.href = "#";
            botonMas.innerHTML = "Más Información";
            divContenedorCuerpo.appendChild(titulo);
            divContenedorCuerpo.appendChild(parrafo);
            divContenedorCuerpo.appendChild(botonMas);
            divContenedor.appendChild(imagen);
            divContenedor.appendChild(divContenedorCuerpo);
            divContenedorCard.appendChild(divContenedor);
            contenedor.appendChild(divContenedorCard);
    });
    }
}