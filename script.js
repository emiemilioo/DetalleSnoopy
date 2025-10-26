// ----------------------------------------------------------------
// 1. OBTENCIÓN DE ELEMENTOS DEL DOM
// ----------------------------------------------------------------

// Obtenemos los elementos clave
const loadingScreen = document.getElementById('loading-screen');
const mainContent = document.getElementById('main-content');
const boton = document.getElementById('abrir-detalle');
const musica = document.getElementById('musica-fondo');


// ----------------------------------------------------------------
// 2. CONTROL DE LA PANTALLA DE CARGA (FLOW INICIAL)
// ----------------------------------------------------------------

// Muestra el contenido principal después de 2 segundos.
setTimeout(() => {
    loadingScreen.style.opacity = '0';
    
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        
        mainContent.classList.remove('hidden');
        mainContent.style.opacity = '1';
        
    }, 500);

}, 2000); 


// ----------------------------------------------------------------
// 3. FUNCIÓN DE INTERACCIÓN DEL BOTÓN (Reemplazo total de contenido)
// ----------------------------------------------------------------

function iniciarAbrazo() {
    
    // Evita clics múltiples
    if (boton.disabled) return;
    boton.disabled = true;

    // Paso 1: Iniciamos la transición de salida
    mainContent.style.opacity = '0';
    
    // Esperamos 500ms para que el fade-out sea suave
    setTimeout(() => {
        
        // --- 2. PREPARACIÓN DEL CONTENIDO FINAL ---
        
        // Creamos un 'cache buster' para forzar la recarga del GIF en móviles
        const timestamp = new Date().getTime();
        
        // Definimos el HTML completo de la Fase 2 (el abrazo)
        const abrazoHTML = `
            <img id="snoopy-gif" 
                 src="snoopy_abrazo.gif?${timestamp}" 
                 alt="Snoopy dando un abrazo" 
                 class="snoopy-img" 
                 width="250" 
                 height="250">
            
            <h1 class="handlee-font abrazo-text">¡Te mando un abrazo virtuaaaaal!</h1>
            <p class="quicksand-font dedicatoria">De Emilio</p>
        `;
        
        // --- 3. REEMPLAZO Y MOSTRAR ---

        // Reemplazamos TODO el contenido dentro del contenedor principal
        mainContent.innerHTML = abrazoHTML;
        
        // Devolvemos la opacidad para la animación de entrada
        mainContent.style.opacity = '1';

        // --- 4. ACTIVAR MÚSICA ---
        
        musica.play().catch(error => {
            console.log("No se pudo reproducir el audio automáticamente. ", error);
        });

    }, 500); 
}
