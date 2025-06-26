import { buscarUsuarios } from "../js/utils/abmusuarios.js";
import { modal } from "../js/utils/popUp.js";


mostrarUsuarios(await buscarUsuarios());

function mostrarUsuarios(lista) {
    if(lista!=null){
        const tablaBody = document.querySelector('#tablaUsuarios tbody');
        tablaBody.innerHTML = '';
        let p = 0;
        lista.forEach(usuario => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${usuario.lastName}</td>
                <td>${usuario.firstName}</td>
                <td>${usuario.age}</td>
                <td>${usuario.address.address}</td>
                <td>${usuario.address.city}</td>
                <td>${usuario.email}</td>
                <td>${usuario.university}</td>
                <td><img class="class_foto_usuario" src="${usuario.image}"/></td>
            `;
            tablaBody.appendChild(fila);
            if(p==0){
                console.log(usuario);
                p=1;
            }
        });
    }else{
        modal('Error','No se pudo recuperar los datos',0);
    }
}