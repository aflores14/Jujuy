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