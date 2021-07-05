const menu = document.querySelector('.menu');
const openBtn = document.querySelector('.ui__btn');
const searchBtn = document.querySelector('.search__icon');

openBtn.addEventListener('click', () => {
  menuScale();
  buttonRotate();
});

searchBtn.addEventListener('click', () => {
  !!menu.classList.contains('active') && menuScale();
});

const menuScale = () => {
  menu.classList.contains('active')
    ? menu.classList.remove('active')
    : menu.classList.add('active');
};

const buttonRotate = () => {
  openBtn.classList.contains('active')
    ? openBtn.classList.remove('active')
    : openBtn.classList.add('active');
};
