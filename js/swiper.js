const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.1,
    centeredSlides: true,
    spaceBetween: 10,
    direction: 'horizontal',
    

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
