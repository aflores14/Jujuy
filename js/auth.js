const API_URL = 'https://dummyjson.com/auth/login';

export async function Login(username, password) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) throw new Error('Credenciales incorrectas');

    return await response.json();
  } catch (error) {
    console.error('Error en Login:', error.message);
    return null;
  }
}