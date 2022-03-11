// Плавный скролл
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // Если есть фиксированный заголовок, задать доп. отступ, равный его высоте
        // Если нет, то установить значение 0
        const topOffset = 0;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

$(document).ready(function () {
    // Полноэкранное стартовое изображение
    $(window).resize(function (event) {
        mainblock();
    });
    function mainblock() {
        let h = $(window).outerHeight();
        $('.mainblock').css('height', h);
    }
    mainblock();

    // Фильтр изображений
    $('.filter__item').click(function (event) {
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
        let ibg=document.querySelectorAll(".ibg");
        for (let i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')) {
                ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
        }
    }
    ibg();

    // Параллакс
    $(window).scroll(function (event) {
        let s = 0 - $(this).scrollTop() / 2;
        $('.mainblock__image').css('transform', ' translate3d(0, ' +s+ 'px, 0');
    });
});

