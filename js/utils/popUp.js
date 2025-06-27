export function modal(titulo,descripcion,opcion){
    let valor = false;
    const contenedorModal = document.createElement('div');
    contenedorModal.className = 'modal-container bg-secondary';
    const ventana = document.createElement('div');
    if(opcion==0){
        ventana.className = 'modal-content';
        ventana.style.backgroundColor = "#f97645";
    }else{
        if(opcion==1){
            ventana.className = 'modal-content';
            ventana.style.backgroundColor = "#89f7bd"
        }else{
            ventana.className = 'modal-content';
            ventana.style.backgroundColor = "#fabd83"
        }
    }
    const titulo_ = document.createElement('h2');
    titulo_.innerHTML = titulo;
    ventana.append(titulo);
    const descripcion_ = document.createElement('p');
    descripcion_.innerHTML = descripcion;
    ventana.append(descripcion_);
    const botonAceptar = document.createElement('button');
    botonAceptar.type="button";
    botonAceptar.className="btn btn-success"
    botonAceptar.innerHTML = 'Acecptar';
    botonAceptar.addEventListener('click',()=>{
        ventana.style.visibility = "hidden";
    });
    ventana.append(botonAceptar);
    ventana.style.visibility = "visible";
    contenedorModal.append(ventana);
    const contenedor = document.getElementById("contenedorMain");
    contenedor.append(contenedorModal);
    return valor;
}