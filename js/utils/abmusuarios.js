import {modal} from './popUp.js';

export async function buscarUsuarios(){
    try{
        const response = await fetch('https://dummyjson.com/users');
        if(response.ok){
            const datos = await response.json();
            const listausuarios = datos.users;
            return listausuarios;
        }else{
            modal('Error de acceso','No se pudo recuperar los datos',0);
            console.log(response.status);
        }
    }catch(error){
            modal('Error de acceso','No se acceder a la pagina',0);
            console.log(response.status);
    }
}