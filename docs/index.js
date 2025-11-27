// Referencias a los elementos
const tvImage = document.getElementById('tv-image');
const powerBtn = document.getElementById('power-btn');
const introContainer = document.getElementById('intro-container');
const reportaje = document.getElementById('reportaje');

if (powerBtn) {
    powerBtn.addEventListener('click', function() {
        
        // 1. Ocultamos el botón (usando visibility para que no salte)
        powerBtn.style.visibility = 'hidden';

        // 2. ¡ACCIÓN! Le ponemos la clase que hace el flashazo
        tvImage.classList.add('efecto-encender');

        // 3. Pequeño truco: Esperamos 150ms (milisegundos) a que el brillo esté alto
        setTimeout(function() {
            // AHORA cambiamos la imagen, cubiertos por el flash
            tvImage.src = 'images/tv-on.png'; 
        }, 150);

        // 4. Esperamos 2 segundos para que se aprecie la intro
        setTimeout(function() {
            
            // Desvanecer la pantalla completa
            introContainer.style.opacity = '0';
            
            // Quitar intro y mostrar reportaje
            setTimeout(function() {
                introContainer.style.display = 'none';
                reportaje.style.display = 'block'; 
                window.scrollTo(0, 0);
            }, 1000);

        }, 2000); // Le di un poquito más de tiempo (2s) para disfrutar el efecto
    });
}