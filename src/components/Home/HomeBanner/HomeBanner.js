import React from 'react';
import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.webp';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import HomeBannerItem from './HomeBannerItem';



const bannerData=[
    {
        image:img1,
        prev:6,
        id:1,
        next:2
    },
    {
        image:img2,
        prev:1,
        id:2,
        next:3
    },
    {
        image:img3,
        prev:2,
        id:3,
        next:4
    },
    {
        image:img4,
        prev:3,
        id:4,
        next:1
    }
]

const HomeBanner = () => {
    return (
        <div className="carousel w-full">
          {
            bannerData.map(slide=><HomeBannerItem
             key={slide.id}
             slide={slide}
            ></HomeBannerItem>)
          }
        </div>
    );
};

export default HomeBanner;