const burgerBtn = document.querySelector('.burger-menu'),
      menuList = document.querySelector('.header__top .nav__list'),
      body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menuList.classList.toggle('active');
    body.classList.toggle('active');
})