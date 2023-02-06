import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Keyboard, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './HomeCategoryProducts.css'
import { Link } from 'react-router-dom';
import { StateContext } from '../../../contexts/AuthProvider';
import Loader from '../../Loader/Loader';

const HomeCategoryProducts = () => {
  const { categories, isCategoryLoading } = useContext(StateContext);

  if (isCategoryLoading) {
    return <Loader />
  }

  return (
    <div className='my-10 px-5'>
      <h2 className='text-xl md:text-3xl text-center font-bold py-5'>Browse Categories</h2>
      <Swiper
        style={{
          "--swiper-navigation-size": "22px",
        }}
        breakpoints={{
          640: {
            width: 640,
            slidesPerView: 3,
          },
          768: {
            width: 640,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 4,
          },
        }}
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation, FreeMode, Keyboard]}
        className="w-full h-[180px] border rounded-md swiper"
      >
        <div>
          {
            categories.map(category =>
              <SwiperSlide key={category?._id} className='text-center hover:underline'>
                <Link to={`/category/${category.categoryName}`}>
                  <img src={category?.image} className="w-32 h-32 object-cover mx-auto" alt="slide-img" />
                  <p>{category?.categoryName}</p>
                </Link>
              </SwiperSlide>
            )
          }
        </div>
      </Swiper>
    </div>
  );
};

export default HomeCategoryProducts;