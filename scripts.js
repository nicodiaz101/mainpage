/* Menu hamburguesa*/
const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener('click', () => {
    nav.classList.add('visible');
});
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
});
/* Fin Menu hamburguesa*/
/* Glider.js inicialization */
window.addEventListener('load', function () {
    [].forEach.call(document.querySelectorAll('.glider'), function (ele) {
    ele.addEventListener('glider-slide-visible', function (event) {
    var glider
            = Glider(this); console.log('Slide Visible %s', event.detail.slide)
    });
    ele.addEventListener('glider-slide-hidden', function (event) {
    console.log('Slide Hidden %s', event.detail.slide)
    });
    ele.addEventListener('glider-refresh', function (event) {
    console.log('Refresh')
    });
    ele.addEventListener('glider-loaded', function
            (event) {
    console.log('Loaded')
    });
    new Glider(ele, {
    slidesToShow: 1,
            scrollLock: true,
            scrollLockDelay: 250,
            draggable: true,
            dots: ele.parentNode.querySelector('.dots'),
            arrows: {
            prev: ele.parentNode.querySelector('.glider-prev'),
                    next: ele.parentNode.querySelector('.glider-next')
            }
    });
    });
    });
/* Fin Glider.js inicialization */