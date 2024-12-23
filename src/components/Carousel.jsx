// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Slider from './Slider'

import banner1 from '../assets/banner/banner.jpg'
import banner2 from '../assets/banner/bannerTwo.jpg';
import banner3 from '../assets/banner/bannerThree.jpg';
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


const Carousel = () => {
    return (
        <div className="relative px-4 py-8 sm:px-6 sm:py-10 md:px-12 lg:px-16 bg-gradient-to-b from-gray-100 via-white to-gray-200">
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Slider
            image={banner1}
            text="Discover the Joy of Sharing Knowledge"
          ></Slider>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Slider
            image={banner2}
            text="Post Your Books and Borrow with Ease"
          ></Slider>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <Slider
            image={banner3}
            text="Connecting Readers, One Book at a Time"
          ></Slider>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Carousel;