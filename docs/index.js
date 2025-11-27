// Referencias a los elementos
const tvImage = document.getElementById('tv-image');
const powerBtn = document.getElementById('power-btn');
const introContainer = document.getElementById('intro-container');
const reportaje = document.getElementById('reportaje');

if (powerBtn) {
    powerBtn.addEventListener('click', function() {
        
        // 1. INMEDIATO: Escondemos el botón para que sepa que hizo clic
        powerBtn.style.visibility = 'hidden';

        // 2. SUSPENSO: Esperamos 1 segundo (1000ms) con la tele apagada
        setTimeout(function() {

            // --- AQUÍ EMPIEZA LA MAGIA (después del segundo de espera) ---

            // A. Lanzamos el flashazo
            tvImage.classList.add('efecto-encender');

            // B. Cambiamos la foto justo en el brillo máximo (150ms después del flash)
            setTimeout(function() {
                tvImage.src = 'images/tv-on.png'; 
            }, 150);

            // C. Esperamos un rato a que vean el logo y luego entramos al sitio
            setTimeout(function() {
                
                // Desvanecer la pantalla negra
                introContainer.style.opacity = '0';
                
                // Quitar todo y mostrar el reportaje
                setTimeout(function() {
                    introContainer.style.display = 'none';
                    reportaje.style.display = 'block'; 
                    window.scrollTo(0, 0);
                }, 1000);

            }, 2500); // Tiempo para ver el logo encendido

        }, 1000); // <--- ESTE ES EL SEGUNDO DE SILENCIO (SUSPENSO)
    });
}