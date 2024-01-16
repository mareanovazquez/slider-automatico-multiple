document.addEventListener('DOMContentLoaded', function () {

  // Mostrar y ocultar botón "Volver arriba"

  let btnVolverArriba = document.getElementById('btnVolverArriba');

  window.addEventListener('scroll', function () {

    let proyectosOffsetTop = document.getElementById('principal').offsetTop;

    if (window.scrollY >= proyectosOffsetTop) {

      btnVolverArriba.style.marginRight = '0';

    } else if (window.scrollY <= proyectosOffsetTop / 2) {

      btnVolverArriba.style.marginRight = '-60px';

    }

  });
});

