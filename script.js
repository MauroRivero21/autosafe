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


function deleteText() {
  const currentText = textElement.textContent;
  if (currentText.length > 0) {
    textElement.textContent = currentText.slice(0, -1); 
    setTimeout(deleteText, 50); 
  } else {
    setTimeout(writeText, 500); 
  }
}



function writeText() {
  const targetText = texts[index];
  let currentText = textElement.textContent;
  if (currentText.length < targetText.length) {
    textElement.textContent = targetText.slice(0, currentText.length + 1);
    setTimeout(writeText, 50); 
  } else {
    index = (index + 1) % texts.length; 
    setTimeout(deleteText, 2000); 
  }
}


setTimeout(deleteText, 2000); 

const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 190,
  loop: true,
  navigation: {
    nextEl: '.next',
    prevEl: '.previous ',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
