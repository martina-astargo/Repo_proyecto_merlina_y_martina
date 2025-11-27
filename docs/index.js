// Referencias a los elementos
const tvImage = document.getElementById('tv-image');
const powerBtn = document.getElementById('power-btn');
const introContainer = document.getElementById('intro-container');
const reportaje = document.getElementById('reportaje');

if (powerBtn) {
    powerBtn.addEventListener('click', function() {
        
        // 1. INMEDIATO: Escondemos el botón
        powerBtn.style.visibility = 'hidden';

        // 2. SUSPENSO: Esperamos 1 segundo con la pantalla negra
        setTimeout(function() {

            // --- MAGIA ---
            
            // A. Flashazo
            tvImage.classList.add('efecto-encender');

            // B. Ponemos la imagen de la TV prendida
            setTimeout(function() {
                tvImage.src = 'images/tv-on.png'; 
            }, 150);

            // C. DURACIÓN DE LA TELE PRENDIDA (Aquí hicimos el cambio)
            // Antes era 2500, ahora es 1500 (1.5 segundos) para que sea más rápido
            setTimeout(function() {
                
                // Desvanecer
                introContainer.style.opacity = '0';
                
               // Entrar al reportaje
            setTimeout(function() {
                introContainer.style.display = 'none';
                reportaje.style.display = 'block';
                window.scrollTo(0, 0);
                
                // --- PEGA ESTO AQUÍ ---
                window.dispatchEvent(new Event('resize'));

            }, 1000);
            }, 1500); // <--- ¡AQUÍ ESTÁ EL CAMBIO! (Más corto)

        }, 1000); 
    });
}