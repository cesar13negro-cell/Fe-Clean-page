// script.js — validación simple del formulario y año dinámico
document.getElementById('anio').textContent = new Date().getFullYear();

const navToggle = document.querySelector('.nav-toggle');
const navList = document.getElementById('nav-list');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navList.style.display = expanded ? '' : 'flex';
  });
}

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const service = form.service.value;

    if (!name || !email || !service) {
      status.textContent = 'Por favor completa los campos requeridos (nombre, correo y servicio).';
      status.style.color = 'crimson';
      return;
    }

    status.textContent = 'Enviando...';
    status.style.color = '';
    // Aquí va fetch() a tu API real. Simulación:
    setTimeout(() => {
      status.textContent = 'Gracias, hemos recibido tu solicitud. Te contactaremos pronto.';
      form.reset();
    }, 900);
  }, {passive:false});
}
