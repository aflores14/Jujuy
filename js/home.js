import { listarsalones, listarimagenes } from "./utils/abmsalones.js";

cargarDatos(await listarsalones(), await listarimagenes());

function buscarImagen(listaI_,idsalon_){
    let ruta = './assets/img/salon1.jpg';
    listaI_.forEach(item=>{
        if(item.idsalon==idsalon_){
            if(item.ruta!="")
                ruta = item.ruta;
        }
    });
    console.log(ruta);
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
            if(element.descripcion.length>70){
                parrafo.innerHTML = element.descripcion.substring(0, 70) + '...';
            }else{
                parrafo.innerHTML = element.descripcion;
            }
            // *** MODIFICACIÓN CLAVE: CREACIÓN DEL BOTÓN PARA EL MODAL ***
            let botonMas = document.createElement("button"); 
            botonMas.type = "button"; 
            botonMas.className = "btn btn-primary"; 
            botonMas.innerHTML = "Más Información";
            botonMas.setAttribute("data-bs-toggle", "modal");
            botonMas.setAttribute("data-bs-target", "#salonModal"); 
            botonMas.setAttribute("data-title", element.titulo);
            botonMas.setAttribute("data-description", element.descripcion);
            botonMas.setAttribute("data-address", element.direccion);
            botonMas.setAttribute("data-value", element.valor);
            botonMas.setAttribute("data-status", element.estado);
            botonMas.setAttribute("data-image", ruta); 

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
const salonModal = document.getElementById('salonModal');
if (salonModal) {
    salonModal.addEventListener('show.bs.modal', event => {
       const button = event.relatedTarget;
       const title = button.getAttribute('data-title');
       const description = button.getAttribute('data-description');
       const address = button.getAttribute('data-address');
       const value = button.getAttribute('data-value');
       const status = button.getAttribute('data-status');
       const image = button.getAttribute('data-image');
       const modalTitle = salonModal.querySelector('.modal-title');
       const modalBody = salonModal.querySelector('.modal-body');
        modalTitle.textContent = title;
        modalBody.innerHTML = `
            <img src="${image}" class="img-fluid mb-3" alt="${title}">
            <p><strong>Descripción:</strong> ${description}</p>
            <p><strong>Dirección:</strong> ${address}</p>
            <p><strong>Valor:</strong> $${value}</p>
            <p><strong>Estado:</strong> ${status}</p>
            `;
    });
}