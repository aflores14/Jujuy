document.addEventListener('DOMContentLoaded', () => {
    verificarSesion();
});

function verificarSesion() {
    if (!sessionStorage.getItem('usuario')) {
        window.location.href = './login.html';
    }
}

document.getElementById('logout').addEventListener('click',()=>{
    sessionStorage.clear();
    window.location.href = './login.html';
});

document.getElementById('abm_salon').className= "nav-link active text-white bg-warning text-center";

document.getElementById('abm_salon').addEventListener('click',()=>{
    document.getElementById('navbarSupportedContent').className = "navbar-collapse collapse";
    document.getElementById('abm_salon').className= "nav-link active text-white bg-warning text-center";
    document.getElementById('abm_usuario').className= "nav-link text-white text-center";
    document.getElementById('abm_servicio').className= "nav-link text-white text-center";
});
document.getElementById('abm_usuario').addEventListener('click',()=>{
    document.getElementById('navbarSupportedContent').className = "navbar-collapse collapse";
    document.getElementById('abm_usuario').className= "nav-link active text-white bg-warning text-center";
    document.getElementById('abm_salon').className= "nav-link text-white text-center";
    document.getElementById('abm_servicio').className= "nav-link text-white text-center";
});
document.getElementById('abm_servicio').addEventListener('click',()=>{
    document.getElementById('navbarSupportedContent').className = "navbar-collapse collapse";
    document.getElementById('abm_servicio').className= "nav-link active text-white bg-warning text-center";
    document.getElementById('abm_salon').className= "nav-link text-white text-center";
    document.getElementById('abm_usuario').className= "nav-link text-white text-center";
});