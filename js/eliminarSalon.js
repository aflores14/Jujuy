function eventoEliminar(posicionEliminar) {
  const salones = JSON.parse(localStorage.getItem("salones")) || [];
  const imagenes = JSON.parse(localStorage.getItem("imagenes")) || [];

  if (!salones[posicionEliminar]) return;

  // Confirmación antes de eliminar
  if (confirm("¿Seguro que deseas eliminar este salón?")) {
    const idSalonAEliminar = salones[posicionEliminar].id;

    // Eliminar salón
    salones.splice(posicionEliminar, 1);
    localStorage.setItem("salones", JSON.stringify(salones));

    // Eliminar imagen asociada (una o más si existiesen)
    const nuevasImagenes = imagenes.filter(img => img.idSalon !== idSalonAEliminar);
    localStorage.setItem("imagenes", JSON.stringify(nuevasImagenes));

    // Actualiza la tabla después de eliminar
    mostrarSalones();
  }
}
window.eventoEliminar = eventoEliminar;
window.mostrarSalones = mostrarSalones;