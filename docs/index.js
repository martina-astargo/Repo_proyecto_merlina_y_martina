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

// --- LÓGICA PARA APAGAR Y PRENDER DE NUEVO ---

const turnOffBtn = document.getElementById('turn-off-btn');
const offEffect = document.getElementById('tv-off-effect');
const turnOnAgainBtn = document.getElementById('turn-on-again-btn');

// 1. APAGAR LA TELE
if (turnOffBtn) {
    turnOffBtn.addEventListener('click', function() {
        // Activamos la animación de apagado
        offEffect.classList.add('apagar-animacion');

        // Esperamos 1.5 segundos (cuando ya esté todo negro) para mostrar el botón de volver
        setTimeout(() => {
            if(turnOnAgainBtn) turnOnAgainBtn.style.display = 'block';
        }, 1500);
    });
}

// 2. VOLVER A VER (REINICIAR)
if (turnOnAgainBtn) {
    turnOnAgainBtn.addEventListener('click', function() {
        // Ocultamos este botón
        turnOnAgainBtn.style.display = 'none';
        
        // Quitamos la negrura (el efecto)
        offEffect.classList.remove('apagar-animacion');
        
        // Subimos al inicio de la página suavemente
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const videos = [
  {
    id: "sXN7Ba8pgcE",
    desc: "En El señor de la querencia: Leonor, esposa del patrón, encara a Leotina por haberle dicho algo malo a su hija. Los personajes femeninos se tratan de prostitutas."
  },
  {
    id: "KFzPgJGVAbk",
    desc: "En La Fiera: Martín se despide de Catalina Chamorro, pero ella está decidida en ir a buscarlo. Personaje femenino toma decisiones y es protagonista de su propia trama."
  },
  {
    id: "sMyioNy7kvQ"
    desc: "En Pituca sin lucas: Fidel termina con Margarita porque se enamoró de Belén. Desde ahí los personajes femeninos se convierten en enemigas."
  }, 
  {
    id: "hFWPv1LVLBA"
    desc: "En Papá a la deriva: Camila se atreve a pedirle pololeo a Cristóbal. El personaje femenino toma la iniciativa y participa activamente en la trama por un objetivo."
  }, 
  {
    id: "r7qoeEaUiVc"
    desc: "En Isla Paraíso: Óscar León se entera que Carolina está casada con otro hombre. Rompe todo, grita y llora desconsoladamente. El personaje masculino enfrenta el rol de desesperación emocional, que está siempre asociado a las mujeres."
  }, 
  {
    id: "010i6DU7AJQ"
    desc: "En Papá a la deriva: Camila se pone celosa de Bárbara. Los personajes fememinos son enemigas durante toda la trama por Cristóbal."
  }
];

let index = 0;

function loadThumbnail() {
  const video = videos[index];

  document.getElementById("thumbImage").src =
    `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  document.getElementById("videoDescription").textContent = video.desc;
}

function nextVideo() {
  index = (index + 1) % videos.length;
  loadThumbnail();
}

function prevVideo() {
  index = (index - 1 + videos.length) % videos.length;
  loadThumbnail();
}

function openVideo() {
  const video = videos[index];
  window.open(`https://www.youtube.com/watch?v=${video.id}`, "_blank");
}

loadThumbnail();