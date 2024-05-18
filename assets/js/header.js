const menuBtn = document.querySelector('.menu-btn'),
      menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menuClick')
    menu.classList.toggle('showMenu')
});

window.addEventListener('scroll', () => {
    menuBtn.classList.remove('menuClick')
    menu.classList.remove('showMenu')
})

