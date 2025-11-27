// Referencias a los elementos
const tvImage = document.getElementById('tv-image');
const powerBtn = document.getElementById('power-btn');
const introContainer = document.getElementById('intro-container');
const reportaje = document.getElementById('reportaje');

// Escuchamos el clic en el botón
powerBtn.addEventListener('click', function() {
    
    // 1. Cambiamos la imagen a la TV ENCENDIDA (ruta correcta)
    // Asegúrate de que el nombre del archivo sea exacto (mayúsculas/minúsculas)
    tvImage.src = 'images/tv-on.png'; 
    
    // 2. Ocultamos el botón para que solo se vea la tele
    powerBtn.style.display = 'none';

    // 3. Esperamos 1.5 segundos (1500ms) viendo el logo
    setTimeout(function() {
        
        // Hacemos que la intro se desvanezca
        introContainer.style.opacity = '0';
        
        // Cuando termine de desvanecerse (1 seg), la quitamos y mostramos el reportaje
        setTimeout(function() {
            introContainer.style.display = 'none';
            reportaje.style.display = 'block'; 
            
            // Un pequeño truco para asegurar que el reportaje se vea bien
            window.scrollTo(0, 0);
        }, 1000);

    }, 1500); 
});