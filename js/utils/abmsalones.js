import {modal} from './popUp.js';

async function cargaInicial(){
    try{
        const response = await fetch('./utils/salones.json');
        if(!response.ok){
            modal("Error de carga","No se pudo cargar los salones",0);
            console.log(response);
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
    listaimaganes.push({"id":listaimaganes.length,"idsalon":lista.length,"ruta":imagen});
    localStorage.setItem("imagenes", JSON.stringify(listaimaganes));
    return listarsalones();
}

export function cargarmodificarsalon(titulo,descripcion,id,posicion,valor,estado,direccion){
    document.getElementById('titulo').value = titulo;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('btnModificarSalon').style.visibility = 'visible';
    document.getElementById('btnAgregarSalon').style.visibility = 'hidden';
    let listaimg = JSON.parse(localStorage.getItem("imagenes"));
    listaimg.forEach(item=>{
        if(item.idsalon==id){
            document.getElementById('imagenPreview').value = item.ruta;
        }
        /************************************************** */
        /***************************************************** */
        /******************************************************* */
        console.log(item.idsalon+"----------"+id);
    });
    document.getElementById('posicionModificar').value = posicion;
    document.getElementById('precio').value = valor;
    document.getElementById('direccion').value = direccion;
    document.getElementById('estado').disabled = false;
    document.getElementById('estado').value = estado;
    document.getElementById('titulo').focus();
    return 0;
}

export function modificarsalon(titulo,descripcion,imagen,valor,estado,direccion){
    let lista = JSON.parse(localStorage.getItem("salones"));
    lista[document.getElementById('posicionModificar').value].titulo = titulo;
    lista[document.getElementById('posicionModificar').value].descripcion = descripcion;
    /***********************************VER COMO ACTUALIZAR LA IMAGEN*/
    //lista[document.getElementById('posicionModificar').value].imagen = imagen;
    lista[document.getElementById('posicionModificar').value].valor = valor;
    lista[document.getElementById('posicionModificar').value].direccion = direccion;
    lista[document.getElementById('posicionModificar').value].estado = estado;
    localStorage.setItem("salones", JSON.stringify(lista));
    return listarsalones();
}

export function eliminarsalon(id){
    let lista = JSON.parse(localStorage.getItem("salones"));
    // Confirmación antes de eliminar
    if (confirm("¿Seguro que deseas eliminar este salón?")) {
        //Eliminando Imagen
        let lista = JSON.parse(localStorage.getItem("imagenes"));
        let auxiliarimagen = [];
        lista.forEach(item=>{
            if(item.idsalon!=id){
                auxiliarimagen.push(item);
            }
        });
        localStorage.setItem("imagenes", JSON.stringify(auxiliarimagen));
        //Eliminando Salon
        let listaa = JSON.parse(localStorage.getItem("imagenes"));
        let auxiliarsalon = [];
        listaa.forEach(item=>{
            if(item.id!=id){
                auxiliarsalon.push(item);
            }
        });
        localStorage.setItem("salones", JSON.stringify(auxiliarsalon));
    }
    location.reload();
}