const itemClientes = document.getElementsByClassName('itemCliente');
const sliderContainer = document.getElementById('sliderClientes')

const slideWidth = sliderContainer.offsetWidth / 6; // Ancho de cada slide dividiendo el contenedor en 6

let currentPosition = 0;

function nextSlide() {



    if (currentPosition > -(slideWidth * 3)) {

        currentPosition -= slideWidth;
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
        sliderContainer.style.transition = "transform 1.4s ease-in-out";
        /* sliderContainer.appendChild(itemClientes[0]); */
        // Mueve la primera imagen al final del contenedor
        /* sliderContainer.insertBefore(itemClientes[0], itemClientes[12]) */
        



    } else {
        // Si estás en el último slide, regresa al principio
        currentPosition = 0;
        
        sliderContainer.style.transform = `translateX(${currentPosition}px)`;
        sliderContainer.style.transition = 'transform 0s';
        sliderContainer.insertBefore(itemClientes[6], itemClientes[0])
        sliderContainer.insertBefore(itemClientes[7], itemClientes[1])
        sliderContainer.insertBefore(itemClientes[8], itemClientes[2])
        sliderContainer.insertBefore(itemClientes[9], itemClientes[3])
        sliderContainer.insertBefore(itemClientes[10], itemClientes[4])
        sliderContainer.insertBefore(itemClientes[11], itemClientes[5])

        // Vuelve a activar la transición después de realizar los cambios
   
    }


}

// Configura el intervalo para cambiar automáticamente los slides cada 3 segundos
const intervalId = setInterval(nextSlide, 4500);