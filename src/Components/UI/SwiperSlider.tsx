import React, { FC, useMemo } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

import useMedia from '../../Hooks/useMedia';

const SwiperSlider: FC<{
  cards: JSX.Element[];
}> = ({ cards }) => {
  const width = useMedia();

  const sheetCard = cards[0].props.index !== undefined;
  const sliderPerView = width > 670;

  return useMemo(
    () => (
      <Swiper
        spaceBetween={sliderPerView || sheetCard ? 20 : -20}
        slidesPerView={sliderPerView ? 3 : 1.3}
        grabCursor={true}
      >
        {cards.map((Element, index) => (
          <SwiperSlide key={index}>{Element}</SwiperSlide>
        ))}
      </Swiper>
    ),
    [sliderPerView]
  );
};

export default SwiperSlider;
