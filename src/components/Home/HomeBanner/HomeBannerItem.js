import React from 'react';
import { Link } from 'react-router-dom';
import './HomeBanner.css';

const HomeBannerItem = ({slide}) => {
const {image,id,prev,next} =slide;

    return ( 
        <div id={`slide${id}`} className="carousel-item relative w-full">
               <div className='carousel_img'>
                  <img src={image} className="object-cover h-[580px] w-screen" alt=" " />
               </div> 
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/3">
                   <h1 className='text-6xl text-white font-bold'>
                      Welcome<br/> To Our Online <br/>
                      <span className="text-pink-500">Fast Grocer</span><br/>
                      Service
                   </h1>
                  
                </div>
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
                   <Link to={'/allproducts'}><button className="btn btn-active btn-info px-7">Browse Products</button></Link>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default HomeBannerItem;