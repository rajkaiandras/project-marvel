import React from 'react';

// components
import { SwiperHome } from '../../components/swiperHome/SwiperHome';
import { ArrowBtn } from '../../components/buttons/arrowBtn/ArrowBtn';

// styles
import './Home.css';

export const Home = () => {
  return (
    <div className="Home">
      <SwiperHome />
      <ArrowBtn />
    </div>
  );
};
