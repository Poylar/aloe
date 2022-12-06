import React, { FC } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SwiperProps {
  cards: JSX.Element[];
}

const SwiperSlider: FC<SwiperProps> = ({ cards }) => (
  <Swiper spaceBetween={20} slidesPerView={3} grabCursor={true}>
    {cards.map((Element, index) => (
      <SwiperSlide key={index}>{Element}</SwiperSlide>
    ))}
  </Swiper>
);

export default SwiperSlider;
