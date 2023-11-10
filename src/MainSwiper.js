// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import slideData from '${process.env.PUBLIC_URL}/data/data.json';
import slideData from "./data/data.json";
import MainSwiperSlide from "./MainSwiperSlide";

const MainSwiper = () => {
    let bg = "";
  return (
    <>
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation={{ clickable: true }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            className="main-swiper"
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            {
                slideData.map((item, i) => {
                    return (
                        <SwiperSlide>
                            <MainSwiperSlide bg={item.img}></MainSwiperSlide>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </>
  );
}

export default MainSwiper;
