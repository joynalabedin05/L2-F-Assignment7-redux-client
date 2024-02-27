
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
const Gallery = () => {
    const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
    <div className="text-center">
                <h1 className="text-4xl font-bold">Gallery items</h1>
                <p className='mt-4 mb-8 '>“ broad range of value added capabilities provided under the SCM services can <br /> help achieve your business objectives with reliability, speed, agility, resilience, cost. <br /> ornare viverra your business objective. ”</p>
            </div>  
      <Swiper
      
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full md:h-[500px] rounded-md' src="https://supply.co/cdn/shop/files/supply-87-2-2_3b3794c9-48b3-4a9c-b31f-642708779e48.jpg?v=1622572339" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full md:h-[500px] rounded-md' src="https://thumbs.dreamstime.com/z/different-school-supplies-cardboard-box-120911895.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full md:h-[500px] rounded-md' src="https://cdn.gobankingrates.com/wp-content/uploads/2022/08/teenager-donates-school-supplies_iStock-1387287494.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full md:h-[500px] rounded-md' src="https://static.vecteezy.com/system/resources/previews/009/455/498/original/donation-boxes-open-cardboard-box-with-food-supplies-medicines-sanitizer-face-masks-humanitarian-aid-help-for-refugees-charity-illustration-in-flat-cartoon-style-vector.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full md:h-[500px] rounded-md' src="https://www.1stunitedcu.org/assets/files/CxKPowbf/school%20supply%20landing%20page.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full md:h-[500px] rounded-md' src="https://media.licdn.com/dms/image/D5612AQF2Mz3UKjRfKw/article-cover_image-shrink_720_1280/0/1688715743460?e=2147483647&v=beta&t=1knyLHYzanNpYjY1P-rpLlSjQQqOHEpu3nYjd6PcfA4" alt="" /></SwiperSlide>
        
        <div className="autoplay-progress" slot="container-end">
        <svg ref={progressCircle}>
             {/* <circle cx="2" cy="2" r="2"></circle>  */}
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Gallery;