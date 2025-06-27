import {modal} from './popUp.js';

async function cargaInicial(){
    try{
        const response = await fetch('./utils/salones.json');
        if(!response.ok){
            modal("Error de carga","No se pudo cargar los salones",0);
            return [];  
        }else{
            const respuesta = await response.json();
            return respuesta.listaSalones;
        }
    }catch(error){
            console.log(error);
            return [];
    }
}
async function cargaInicialImagenes(){
    try{
        const response = await fetch('./utils/imagenes.json');
        if(!response.ok){
            modal("Error de carga","No se pudo cargar las imagenes",0);
            return [];  
        }else{
            const respuesta = await response.json();
            return respuesta.listaImagenes;
        }
    }catch(error){
            console.log(error);
            return [];
    }
}

export async function listarsalones(){    
    let lista = JSON.parse(localStorage.getItem("salones"));
    if (lista === null) {
        const l = await cargaInicial();
        localStorage.setItem("salones", JSON.stringify(l));
        const ll = JSON.parse(localStorage.getItem("salones"));
        return ll;
    }else{
        return lista;
    }
}

export async function listarimagenes(){    
    let lista = JSON.parse(localStorage.getItem("imagenes"));
    if (lista === null) {
        const l = await cargaInicialImagenes();
        localStorage.setItem("imagenes", JSON.stringify(l));
        const ll = JSON.parse(localStorage.getItem("imagenes"));
        return ll;
    }else{
        return lista;
    }
}


export function agregarsalon(salon,imagen){
    let lista = JSON.parse(localStorage.getItem("salones"));
    lista.push(salon);
    localStorage.setItem("salones", JSON.stringify(lista));
    let listaimaganes = JSON.parse(localStorage.getItem("imagenes"));
    listaimaganes.push({"id":listaimaganes.length+1,"idsalon":lista.length,"ruta":imagen});
    localStorage.setItem("imagenes", JSON.stringify(listaimaganes));
    return listarsalones();
}

export function cargarmodificarsalon(titulo,descripcion,id,valor,estado,direccion){
    document.getElementById('titulo').value = titulo;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('btnModificarSalon').style.visibility = 'visible';
    document.getElementById('btnAgregarSalon').style.visibility = 'hidden';
    let listaimg = JSON.parse(localStorage.getItem("imagenes"));
    listaimg.forEach(item=>{
        if(item.idsalon==id){
            document.getElementById('imagen').value = item.ruta;
            document.getElementById('imagenPreview').src = item.ruta;
            document.getElementById('imagenPreview').className = "img-thumbnail mt-3";
        }
    });
    document.getElementById('posicionModificar').value = id;
    document.getElementById('precio').value = valor;
    document.getElementById('direccion').value = direccion;
    document.getElementById('estado').disabled = false;
    document.getElementById('estado').value = estado;
    document.getElementById('titulo').focus();
    return 0;
}

export function modificarsalon(titulo,descripcion,imagen,valor,estado,direccion){
    let lista = JSON.parse(localStorage.getItem("salones"));
    for(let indice = 0; indice<lista.length;indice++){
        if(lista[indice].id == document.getElementById('posicionModificar').value){
            lista[indice].titulo = titulo;
            lista[indice].descripcion = descripcion;
            lista[indice].valor = valor;
            lista[indice].direccion = direccion;
            lista[indice].estado = estado;
            /*ACTUALIZAR LA IMAGEN*/
            let listaimg = JSON.parse(localStorage.getItem("imagenes"));
            for(let indice = 0; indice<listaimg.length;indice++){
                if(listaimg[indice].idsalon==document.getElementById('posicionModificar').value){
                    listaimg[indice].ruta = imagen;
                }
            }
            localStorage.setItem("salones", JSON.stringify(lista));
            localStorage.setItem("imagenes", JSON.stringify(listaimg));
            limpiarImagen();
        }
    }
    return listarsalones();
}

function limpiarImagen() {
  document.getElementById('imagen').value = '';
  document.getElementById('imagenFile').value = '';
  document.getElementById('imagenPreview').classList.add('d-none');
  document.getElementById('imagenPreview').src = '';
}

export function eliminarsalon(id){
    // Confirmación antes de eliminar
    if (confirm("¿Seguro que deseas eliminar este salón?")) {
        //Eliminando Salon
        let listaa = JSON.parse(localStorage.getItem("salones"));
        let auxiliarsalon = [];
        listaa.forEach(item=>{
            if(item.id!=id){
                auxiliarsalon.push(item);
            }
        });
        localStorage.setItem("salones", JSON.stringify(auxiliarsalon));
        //Eliminando Imagen
        let lista_ = JSON.parse(localStorage.getItem("imagenes"));
        let auxiliarimagen = [];
        console.log(lista_);
        lista_.forEach(item=>{
            if(item.idsalon!=id){
                auxiliarimagen.push(item);
            }
        });
        localStorage.setItem("imagenes", JSON.stringify(auxiliarimagen));
        window.location.reload();
    }
}