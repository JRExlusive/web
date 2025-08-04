let slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNextSlide, 4000);
 
function mostrarSeccion(seccion) {
  const inicio = document.getElementById('inicio');
  const mujeres = document.getElementById('seccion-mujeres');
  const hombres = document.getElementById('seccion-hombres');

  inicio.style.display = 'none';
  mujeres.style.display = 'none';
  hombres.style.display = 'none';

  if (seccion === 'mujeres') {
    mujeres.style.display = 'grid';
  } else if (seccion === 'hombres') {
    hombres.style.display = 'grid';
  } else {
    inicio.style.display = 'grid';
  }
}
