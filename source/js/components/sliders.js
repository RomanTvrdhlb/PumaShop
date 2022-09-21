import Swiper from '../vendor/swiper';


for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
  if (mobileSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:1240px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(mobileSlider, {
          slidesPerView: 'auto',
          slidesPerColumn: 3,
          slidesPerColumnFill: "row",
          spaceBetween: 20,
          freeMode: true,
          observer: true,
          observeParents: true
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}

const swiper = new Swiper('.main-slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  observer: true,
  observeParents: true,

  navigation: {
    nextEl: '.swiper-button-next',

  },
});

const tabsSlider = new Swiper('.tabs-content__swiper', {
  slidesPerView: 4,
  spaceBetween: 30,
  observer: true,
  observeParents: true,
  loop:true,
  speed: 3000,

  autoplay: {
    delay: 2000,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const reviewsSwiper = new Swiper('.reviews-swiper', {
  slidesPerView: 1,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop:true,
  speed:3000,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


  autoplay: {
    delay: 4000,
  },

});


