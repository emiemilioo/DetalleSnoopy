// ----------------------------------------------------------------
// 1. OBTENCIÓN DE ELEMENTOS DEL DOM
// ----------------------------------------------------------------

// Obtenemos todos los elementos que vamos a necesitar manipular
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');
const fase1 = document.getElementById('fase-1');
const fase2 = document.getElementById('fase-2');
const boton = document.getElementById('abrir-detalle');
const musica = document.getElementById('musica-fondo');
const snoopyGif = document.getElementById('snoopy-gif');


// ----------------------------------------------------------------
// 2. CONTROL DE LA PANTALLA DE CARGA (FLOW INICIAL)
// ----------------------------------------------------------------

// Usamos un temporizador para simular una carga de 2 segundos.
setTimeout(() => {
    // 1. Ocultamos la pantalla de carga haciendo un fade-out suave.
    loadingScreen.style.opacity = '0';
    
    // Esperamos 500ms para que la transición de opacidad termine.
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        
        // 2. Mostramos el contenido principal (Fase 1: Detallito y botón).
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '1';
        
    }, 500);

}, 2000); // La pantalla de carga está visible durante 2 segundos


// ----------------------------------------------------------------
// 3. FUNCIÓN DE INTERACCIÓN DEL BOTÓN (Llamada directamente con 'onclick' en HTML)
// ----------------------------------------------------------------

// Nota: Esta función reemplaza al antiguo addEventListener para mayor compatibilidad móvil.
function iniciarAbrazo() {
    
    // Si la función ya se ejecutó, salimos. (Esto es gracias al boton.disabled = true)
    if (boton.disabled) return;
    boton.disabled = true;

    // Paso 1: Ocultar el contenido de la Fase 1 con una transición.
    fase1.style.opacity = '0';
    boton.style.opacity = '0';
    
    // Esperamos 500ms para que la transición de opacidad termine
    setTimeout(() => {
        fase1.style.display = 'none';
        
        // Paso 2: Cambiar el GIF de Snoopy (con un 'cache buster' para forzar la recarga en móviles)
        // Esto crea una URL "nueva" para que el navegador no use la versión en caché.
        const timestamp = new Date().getTime();
        snoopyGif.src = 'snoopy_abrazo.gif?' + timestamp;
        
        // Efecto de 'rebote' al cambiar el GIF
        snoopyGif.style.transform = 'scale(0.8)';
        snoopyGif.style.transition = 'transform 0.3s ease-out';
        setTimeout(() => {
            snoopyGif.style.transform = 'scale(1)';
        }, 100);

        // Paso 3: Mostrar la Fase 2 (Abrazo virtual)
        fase2.classList.remove('hidden');
        fase2.classList.add('visible'); // La clase 'visible' tiene opacity: 1 en CSS
        
        // Paso 4: Reproducir la música
        // La música DEBE activarse justo después de la interacción (clic) para funcionar en Chrome/Safari móvil.
        musica.play().catch(error => {
            console.log("No se pudo reproducir el audio automáticamente. ", error);
            // Esto es un error normal cuando los navegadores bloquean el audio.
        });

    }, 500); // 500ms para una transición suave
}
