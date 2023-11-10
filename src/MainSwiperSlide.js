import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slides = (props) => {
  return (
    <div style={{backgroundImage:'url("' + props.bg + '")'}}></div>
  )
}

export default Slides;
