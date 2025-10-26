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

// Temporizador para simular una carga de 2 segundos.
setTimeout(() => {
    // 1. Ocultamos la pantalla de carga haciendo un fade-out suave.
    loadingScreen.style.opacity = '0';
    
    // Esperamos 500ms (la duración de la transición CSS) para ocultarla totalmente.
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        
        // 2. Mostramos el contenido principal (Fase 1: Detallito y botón).
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '1';
        
    }, 500);

}, 2000); // La pantalla de carga está visible durante 2 segundos


// ----------------------------------------------------------------
// 3. FUNCIÓN DE INTERACCIÓN DEL BOTÓN
// ----------------------------------------------------------------

// Añadimos un 'listener' al botón para que reaccione al clic.
boton.addEventListener('click', () => {
    
    // Deshabilitamos el botón inmediatamente para evitar clics múltiples
    boton.disabled = true;

    // Paso 1: Ocultar el contenido de la Fase 1 con una transición.
    fase1.style.opacity = '0';
    boton.style.opacity = '0';
    
    // Esperamos 500ms para que la transición de opacidad termine
    setTimeout(() => {
        fase1.style.display = 'none';
        
        // Paso 2: Cambiar el GIF de Snoopy (fuera de las fases)
        // Reemplazamos el GIF de espera por el GIF de abrazo.
        const timestamp = new Date().getTime();
        snoopyGif.src = 'snoopy_abrazo.gif?' + timestamp;
        
        // Efecto de 'rebote' al cambiar el GIF para hacerlo más dinámico
        snoopyGif.style.transform = 'scale(0.8)';
        snoopyGif.style.transition = 'transform 0.3s ease-out';
        setTimeout(() => {
            snoopyGif.style.transform = 'scale(1)';
        }, 100);

        // Paso 3: Mostrar la Fase 2 (Abrazo virtual)
        fase2.classList.remove('hidden');
        fase2.classList.add('visible'); // La clase 'visible' tiene opacity: 1 en CSS
        
        // Paso 4: Reproducir la música
        musica.play().catch(error => {
            // Manejo de errores de autoplay de navegadores (es común)
            console.log("No se pudo reproducir el audio automáticamente. Puede que el navegador lo haya bloqueado. ", error);
        });

    }, 500); // 500ms para una transición suave

});
