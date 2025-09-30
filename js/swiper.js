const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 15,
    direction: 'horizontal',
    centeredSlides: true,
    
    pagination: {
        el: '.swiper-pagination', // ページネーションの要素
        clickable: true, // ページネーションをクリック可能にする
    },

    navigation: {
        nextEl: '.swiper-button-next', // 次へボタンの要素
        prevEl: '.swiper-button-prev', // 前へボタンの要素
    },

    scrollbar: {
        el: '.swiper-scrollbar', // スクロールバーの要素
    }
});

