// NOMBRES de archivos — cámbialos si usas otros
const TV_OFF = 'tv-off.png';
const TV_ON  = 'tv-on.png';
const TARGET = 'index.html'; // a dónde redirigir

// Elementos
const tvImg = document.getElementById('intro-tv');
const btn = document.getElementById('turn-on-btn');

// Preload de la imagen "on" para que el cambio sea instantáneo
const imgOn = new Image();
imgOn.src = TV_ON;

// Encender al click o al Enter/Space cuando el botón está enfocado
function encenderYredirigir() {
  // Evita múltiples clicks
  btn.disabled = true;

  // Efecto flicker
  tvImg.classList.add('screen-flick');

  // Después de un pequeño delay reemplazamos la src por la imagen prendida
  setTimeout(() => {
    tvImg.src = TV_ON;
    tvImg.classList.remove('screen-flick');
    tvImg.classList.add('screen-glow'); // efecto glow cuando está encendida
  }, 300);

  // Opcional: sonido (descomenta si agregas archivo turn-on.mp3)
/*
  const audio = new Audio('turn-on.mp3');
  audio.play().catch(()=>{}); // ignora error si el navegador bloquea autoplay
*/

  // Redirección al index (ajusta tiempo si quieres)
  setTimeout(() => {
    window.location.href = TARGET;
  }, 1400);
}

// Evento click del botón
btn.addEventListener('click', encenderYredirigir);

// Permitir cliquear la imagen también (mejora UX)
tvImg.addEventListener('click', encenderYredirigir);

// Soporte teclado: Enter/Space en la imagen cuando está con tabindex
tvImg.setAttribute('tabindex', '0'); // permite focus con teclado
tvImg.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    encenderYredirigir();
  }
});
