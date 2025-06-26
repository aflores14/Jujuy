function eventoModificar(titulo, descripcion, imagen, posicionModificar) {
  document.getElementById('titulo').value = titulo;
  document.getElementById('descripcion').value = descripcion;
  document.getElementById('btnModificarSalon').style.visibility = 'visible';
  document.getElementById('btnAgregarSalon').style.visibility = 'hidden';
  document.getElementById('imagen').value = imagen; // campo base64
  document.getElementById('posicionModificar').value = posicionModificar;
  document.getElementById('titulo').focus();
}

document.getElementById('btnModificarSalon')?.addEventListener('click', function (event) {
  event.preventDefault();

  let salones = JSON.parse(localStorage.getItem("salones")) || [];
  let imagenes = JSON.parse(localStorage.getItem("imagenes")) || [];

  const index = parseInt(document.getElementById('posicionModificar').value);
  const nuevoTitulo = document.getElementById('titulo').value.trim();
  const nuevaDescripcion = document.getElementById('descripcion').value.trim();
  const nuevaImagen = document.getElementById('imagen').value.trim();

  if (!nuevoTitulo || !nuevaDescripcion) {
    alert('Debe completar todos los datos para actualizar el salón');
    return;
  }

  const idSalon = salones[index].id;

  // Actualizar salón
  salones[index].titulo = nuevoTitulo;
  salones[index].descripcion = nuevaDescripcion;

  // Actualizar imagen asociada
  const imagenIndex = imagenes.findIndex(img => img.idSalon === idSalon);
  if (imagenIndex !== -1) {
    imagenes[imagenIndex].ruta = nuevaImagen;
  } else {
    const nuevaId = imagenes.length > 0 ? imagenes[imagenes.length - 1].id + 1 : 1;
    imagenes.push({ id: nuevaId, idSalon, ruta: nuevaImagen });
  }

  localStorage.setItem('salones', JSON.stringify(salones));
  localStorage.setItem('imagenes', JSON.stringify(imagenes));

  borrar();
});

function borrar() {
  document.getElementById('titulo').value = '';
  document.getElementById('descripcion').value = '';
  document.getElementById('imagen').value = '';
  document.getElementById('btnModificarSalon').style.visibility = 'hidden';
  document.getElementById('btnAgregarSalon').style.visibility = 'visible';
  document.getElementById('posicionModificar').value = '';
  mostrarSalones(); // función definida en otro archivo
}
window.eventoModificar = eventoModificar;
window.mostrarSalones = mostrarSalones;
