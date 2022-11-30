// swiper modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay } from 'swiper';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// styles
import './SwiperHome.css';

// assets
import swiperSlideImage1 from '../../assets/images/swiper/swiper-slide-bg-img-1.jpg';
import swiperSlideImage2 from '../../assets/images/swiper/swiper-slide-bg-img-2.jpg';
import swiperSlideImage3 from '../../assets/images/swiper/swiper-slide-bg-img-3.jpg';
import disneyLogo from '../../assets/images/disney-logo.svg';

// database
const swiperSlideDB = [
  {
    title: 'Captain Marvel',
    subtitle: 'Carol Danvers transformed into the cosmic powered hero',
    image: swiperSlideImage1,
  },
  {
    title: 'Avengers',
    subtitle: 'Earths mightiest heroes fight together as a team',
    image: swiperSlideImage2,
  },
  {
    title: 'Storm',
    subtitle: 'Fighting for peace and equal rights between mutants and humans',
    image: swiperSlideImage3,
  },
];

export const SwiperHome = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      navigation
      pagination
      autoplay
      effect={'fade'}
      speed={3000}
      slidesPerView={1}
      loop
    >
      {swiperSlideDB.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img className="disney-logo" src={disneyLogo} alt="disney logo" />
              <h1 className="slide-title">{slide.title}</h1>
              <h3 className="slide-subtitle">{slide.subtitle}</h3>
            </div>
            <img className="slide-bg" src={slide.image} alt="marvel heroes" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
