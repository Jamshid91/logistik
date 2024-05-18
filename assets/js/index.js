const block4 = new Swiper('.swiper-block4', {
  loop: false,
      navigation: {
      nextEl: '.swiper-block4-next',
      prevEl: '.swiper-block4-prev',
    },
    grabCursor: true,
        pagination: {
        el: '.block4-pagination',
        clickable: true
    },
      breakpoints: {
        0: {
          spaceBetween: 16,
          slidesPerView: 1,
        },
        1199: {
          spaceBetween: 24,  
          slidesPerView: 2,
        },
  }
});