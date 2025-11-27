// Rutas de las imágenes dentro de /images
const TV_OFF = 'images/tv-off.png';
const TV_ON  = 'images/tv-on.png';

// Página a la que redirige
const TARGET = 'index.html';

// Elementos del DOM
const tvImg = document.getElementById('intro-tv');
const btn = document.getElementById('turn-on-btn');

// Preload imagen encendida
const preload = new Image();
preload.src = TV_ON;

// Función principal
function encenderYredirigir() {

    // Evitar clicks repetidos
    btn.disabled = true;

    // Animación de encendido
    tvImg.classList.add('screen-flick');

    // Cambiar imagen después del "flicker"
    setTimeout(() => {
        tvImg.src = TV_ON;
        tvImg.classList.remove('screen-flick');
        tvImg.classList.add('screen-glow');
    }, 300);

    // Redirigir al reportaje (index.html)
    setTimeout(() => {
        window.location.href = TARGET;
    }, 1400);
}

// Click en botón o en la tele
btn.addEventListener('click', encenderYredirigir);
tvImg.addEventListener('click', encenderYredirigir);
