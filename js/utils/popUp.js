export function modal(titulo,descripcion,opcion){
    let valor = false;
    const contenedorModal = document.createElement('div');
    contenedorModal.className = 'modal-container bg-secondary';
    const ventana = document.createElement('div');
    ventana.className = 'modal-content bg-danger';
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