const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 15,
    direction: 'horizontal',
    centeredSlides: true,
    
    pagination: {
        el: '.swiper-pagination', 
        clickable: true, 
    },

    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    },

    scrollbar: {
        el: '.swiper-scrollbar', 
    }
});

