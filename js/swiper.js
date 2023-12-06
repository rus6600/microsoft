const swiperProduct = new Swiper('.swiperProduct', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        1024: {
        slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.swiperProduct-button-next',
        prevEl: '.swiperProduct-button-prev',
    }
});
const swiperServices = new Swiper('.swiperServices', {
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    breakpoints: {
        1024: {
        slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: '.swiperServices-button-next',
        prevEl: '.swiperServices-button-prev',
    }
});