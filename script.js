document.getElementById('menu-button').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.add('active');
  document.querySelector('.menu-overlay').classList.add('active');
});


document.querySelector('.close-button').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.remove('active');
  document.querySelector('.menu-overlay').classList.remove('active');
});


document.querySelector('.menu-overlay').addEventListener('click', function () {
  document.querySelector('.mobile-menu').classList.remove('active');
  this.classList.remove('active');
});


const textElement = document.getElementById('dynamic-text');


const texts = [
  "Revisiones Tecnicomecanicas",
  "Estado de Poliza",
  "Multas e infracciones",
  "Registros de siniestralidad",
  "Historial de solicitudes",
  "Limitaciones de dominio/grávemenes",
  "Estado de poliza RC/RCE",
  "Poliza SOAT",
  "Medidas cautelares"
];

let index = 0;

// Función para borrar el texto letra por letra
function deleteText() {
  const currentText = textElement.textContent;
  if (currentText.length > 0) {
    textElement.textContent = currentText.slice(0, -1); // Borra una letra
    setTimeout(deleteText, 50); // Velocidad de borrado (50ms por letra)
  } else {
    setTimeout(writeText, 500); // Espera 500ms antes de escribir el nuevo texto
  }
}


// Función para escribir el texto letra por letra
function writeText() {
  const targetText = texts[index];
  let currentText = textElement.textContent;
  if (currentText.length < targetText.length) {
    textElement.textContent = targetText.slice(0, currentText.length + 1); // Añade una letra
    setTimeout(writeText, 50); // Velocidad de escritura (50ms por letra)
  } else {
    index = (index + 1) % texts.length; // Avanza al siguiente texto
    setTimeout(deleteText, 2000); // Espera 2 segundos antes de borrar el texto
  }
}

// Inicia el proceso
setTimeout(deleteText, 2000); // Comienza después de 2 segundos

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 190,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
