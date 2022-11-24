import React from 'react';

// swiper and swiper modules
import Swiper, { Navigation, Pagination, SwiperSlide, Autoplay } from 'swiper';
// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// styles
import './SwiperHome.css';

export const SwiperHome = () => {
  const swiper = new Swiper('.swiper', {
    // modules
    modules: [Navigation, Pagination, Autoplay],

    // Optional parameters
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 3000,
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  return (
    /* Slider main container */
    <div className="swiper">
      {/* Additional required wrapper */}
      <div className="swiper-wrapper">
        {/* Slides */}
        <div className="swiper-slide slide-1"></div>
        <div className="swiper-slide slide-2"></div>
        <div className="swiper-slide slide-3"></div>
      </div>
      {/* If we need pagination */}
      <div className="swiper-pagination"></div>

      {/* If we need navigation buttons */}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>

      {/* If we need scrollbar */}
      <div className="swiper-scrollbar"></div>
    </div>
  );
};
