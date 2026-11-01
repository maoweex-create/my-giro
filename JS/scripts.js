const burger = document.querySelector('.m-menu');
const menu = document.querySelector('.mennu');
 
burger.addEventListener('click', () => {
    menu.classList.toggle('is-open');
});
 
// закрываем меню после клика по ссылке
menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
        menu.classList.remove('is-open');
    }
});
 