document.addEventListener("DOMContentLoaded", function () {
    // Función para animar un elemento tipo máquina de escribir
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        const intervalId = setInterval(function () {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                element.classList.add('show'); // Agrega la clase para mostrar el carácter con transición

            } else {
                clearInterval(intervalId);
                if (callback) {
                    callback(); // Llama al callback después de completar la animación
                }
            }
        }, speed);
    }

    // Selecciona los elementos con los IDs "line1Main", "line2Main" y "btnPrincipal"
    const line1MainElement = document.getElementById("line1Main");
    const line2MainElement = document.getElementById("line2Main");
    const btnPrincipalElement = document.getElementById("btnPrincipal");
    const logotipoH1 = document.getElementById("logotipoH1")

    // Define el texto que deseas agregar
    const line1Text = "Menú responsivo con topbar y transparencia";
    const line2Text = "Slider clientes img multiples automatico.";

    // Agrega el texto a las etiquetas <p>
    line1MainElement.textContent = "";
    line2MainElement.textContent = "";

    // Define la velocidad de la animación
    const typingSpeed = 75; // Ajusta la velocidad según tu preferencia

    // Aplica la animación a cada elemento
    typeWriter(line1MainElement, line1Text, typingSpeed, function () {
        // Este callback se ejecuta después de completar la animación de line1Main
        typeWriter(line2MainElement, line2Text, typingSpeed, function () {
            // Este callback se ejecuta después de completar la animación de line2Main
            // Cambia el estilo del botón para mostrarlo después de la animación
            logotipoH1.classList.add('visible')
            btnPrincipalElement.style.display = 'block';
            btnPrincipalElement.style.marginTop='30px'
            
        });
    });
});
