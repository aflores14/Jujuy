function eventoEliminar(posicionEliminar) {
    let lista = JSON.parse(localStorage.getItem("salones"));
    
    // Confirmación antes de eliminar
    if (confirm("¿Seguro que deseas eliminar este salón?")) {
        lista.splice(posicionEliminar, 1); // Elimina el elemento en la posición indicada
        localStorage.setItem("salones", JSON.stringify(lista));
        mostrarSalones(); // Actualiza la tabla después de eliminar
    }
}

