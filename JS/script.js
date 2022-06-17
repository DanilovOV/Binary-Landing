// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // Доп. смещение на высоту фиксированного заголовка
        const topOffset = 0;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Параллакс
window.onscroll = AddParallax;

let image = document.querySelector('.mainblock__image');

function AddParallax() {
    let imageYoffset = 0 - window.pageYOffset / 2;
    image.style.transform = 'translate3d(0, ' + imageYoffset + 'px, 0';
}

$(document).ready(function () {
    // Полноэкранное стартовое изображение
    $(window).resize(function() {
        mainblock();
    });
    function mainblock() {
        let h = $(window).outerHeight();
        $('.mainblock').css('height', h);
    }
    mainblock();

    // Фильтр изображений
    $('.filter__item').click(function() {
        let i = $(this).data('filter');
        if (i == 1) {
            $('.portfolio__column').show();
        }
        else {
            $('.portfolio__column').hide();
            $('.portfolio__column.f_' + i).show();
        }
        $('.filter__item').removeClass('active');
        $(this).addClass('active');
        return false;
    })

    // Делает изображение с классом ibg фоновым
    function ibg(){
        let ibg = document.querySelectorAll(".ibg");
        for (let i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
    ibg();
});

