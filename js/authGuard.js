export function protegerPagina() {
  const token = sessionStorage.getItem('token');

  if (!token) {
    alert('Acceso denegado. Por favor, iniciá sesión.');
    sessionStorage.clear();
    window.location.href = './login.html';
  }
}