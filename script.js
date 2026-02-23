const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('#menu');
const year = document.querySelector('#year');

if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-open');
  });
}

if (year) {
  year.textContent = String(new Date().getFullYear());
}
