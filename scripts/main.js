$(document).ready(() => {
    $('#lang-button').click(() => {
        $('#lang-menu').toggleClass('active');
    })
    // Params
    const sliderSelector = '.swiper-container',
        options = {
            init: false,
            loop: true,
            speed:800,
            slidesPerView: 2, // or 'auto'
            // spaceBetween: 10,
            centeredSlides : true,
            effect: 'coverflow', // 'cube', 'fade', 'coverflow',
            coverflowEffect: {
                rotate: 50, // Slide rotate in degrees
                depth: 0, // Depth offset in px (slides translate in Z axis)
                modifier: 1, // Effect multipler
                slideShadows : false, // Enables slides shadows
            },
            grabCursor: true,
            parallax: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // Events
            on: {
                imagesReady: function(){
                    this.el.classList.remove('loading');
                }
            }
        };
    const swiper = new Swiper(sliderSelector, options);

    // Initialize slider
    swiper.init();

    $("#burger").click(() => {
        $('.menu').toggleClass('active')
    })
    $(".menu-close").click(() => {
        $('.menu').removeClass('active')
    })
})
