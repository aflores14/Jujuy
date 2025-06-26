function eventoEliminar(posicionEliminar) {
  const salones = JSON.parse(localStorage.getItem("salones")) || [];
  const imagenes = JSON.parse(localStorage.getItem("imagenes")) || [];

  if (!salones[posicionEliminar]) return;

  if (confirm("¿Seguro que deseas eliminar este salón?")) {
    const idSalonAEliminar = salones[posicionEliminar].id;

    salones.splice(posicionEliminar, 1);
    localStorage.setItem("salones", JSON.stringify(salones));

    const nuevasImagenes = imagenes.filter(img => img.idSalon !== idSalonAEliminar);
    localStorage.setItem("imagenes", JSON.stringify(nuevasImagenes));

    mostrarSalones();
  }
}
window.eventoEliminar = eventoEliminar;
window.mostrarSalones = mostrarSalones;