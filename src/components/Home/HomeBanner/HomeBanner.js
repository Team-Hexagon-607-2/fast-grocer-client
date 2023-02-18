import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.webp';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Keyboard, Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeBanner.css";
import { Link } from 'react-router-dom';

const slides = [
    {
        title: 'About Phone Band Title',
        image: img1,
    },
    {
        title: 'About Phone Band Title',
        image: img2,
    },
    {
        title: 'About Phone Band Title',
        image: img3,
    },
    {
        title: 'About Phone Band Title',
        image: img4,
    },
];

const HomeBanner = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                loop={true}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay, FreeMode, Keyboard]}
                className="h-[500px]"
                >
                {
                    slides.map(slide =>
                        <SwiperSlide className='relative'>
                            <div className='carousel_img'>
                                <img className='w-full h-screen object-cover' src={slide.image} alt="" />
                            </div>
                            <div className='w-1/2  absolute top-[30%] left-[25%] text-center'>
                                <h2 className='text-white text-3xl lg:text-4xl font-semibold mb-6'>Welcome to our <span className='text-pink-500'>Fast Grocer</span> website</h2>
                                <Link to='/allproducts' className='px-4 inline-block py-2 text-white font-semibold rounded-md  bg-[#84b840] hover:bg-[#6a9333] transition duration-300'>Shop Now</Link>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>

        </>
    );
};

export default HomeBanner;