function eventoModificar(titulo,descripcion,imagen,posicionModificar){
    document.getElementById('titulo').value = titulo;
    document.getElementById('descripcion').value = descripcion;
    document.getElementById('btnModificarSalon').style.visibility = 'visible';
    document.getElementById('btnAgregarSalon').style.visibility = 'hidden';
    document.getElementById('imagen').value = imagen;
    document.getElementById('posicionModificar').value = posicionModificar;
    document.getElementById('titulo').focus();
}

document.getElementById('btnModificarSalon')?.addEventListener('click', function (event) {
        lista = JSON.parse(localStorage.getItem("salones"));
        if(document.getElementById('titulo').value==="" || document.getElementById('descripcion').value===""){
            alert('Debe completar todos los datos para actualizar el Salon');
        }else{
            lista[document.getElementById('posicionModificar').value].titulo = document.getElementById('titulo').value;
            lista[document.getElementById('posicionModificar').value].descripcion = document.getElementById('descripcion').value;
            lista[document.getElementById('posicionModificar').value].imagen = document.getElementById('imagen').value;
            localStorage.setItem('salones', JSON.stringify(lista));
            borrar();
        }
    });

function borrar(){
    document.getElementById('titulo').value = '';
    document.getElementById('descripcion').value = '';
    document.getElementById('imagen').value = 'salon1.jpg';
    document.getElementById('btnModificarSalon').style.visibility = 'hidden';
    document.getElementById('btnAgregarSalon').style.visibility = 'visible';
    document.getElementById('btnAgregarSalon').style.visibility = 'visible';
    document.getElementById('posicionModificar').value = '';
    mostrarSalones();//funcion llamada desde altaSalon.js
}