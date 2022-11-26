import { Link } from 'react-router-dom';

// swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// components
import { ArrowBtn } from '../buttons/arrowBtn/ArrowBtn';

// styles
import './SwiperHome.css';

// slide images
import swiperSlideImage1 from '../../assets/images/swiper/swiper-slide-bg-img-1.jpg';
import swiperSlideImage2 from '../../assets/images/swiper/swiper-slide-bg-img-2.jpg';
import swiperSlideImage3 from '../../assets/images/swiper/swiper-slide-bg-img-3.jpg';

const swiperSlideImages = [
  swiperSlideImage1,
  swiperSlideImage2,
  swiperSlideImage3,
];

export const SwiperHome = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      navigation
      pagination
      autoplay
      effect={'fade'}
      speed={2000}
      slidesPerView={1}
      loop
    >
      {swiperSlideImages.map((image, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <h1 className="slide-title">Heroes live among us</h1>
              <h3 className="slide-subtitle">
                Discover the power of comic books
              </h3>
              <Link to="/characters">
                <ArrowBtn />
              </Link>
            </div>
            <img className="slide-bg" src={image} alt="marvel heroes" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
