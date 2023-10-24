import React, {useEffect, useRef} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
//import { Link } from 'react-router-dom'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


import {TimelineLite ,TweenMax, Power3 ,Bounce} from 'gsap';


// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation,EffectFade,Parallax,Autoplay
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Parallax,Autoplay])





const PepsiSlider = () => {
  

 let tm = new TimelineLite({});
    const vw = (coef) => window.innerWidth * (coef/100);
    const vh = (coef) => window.innerHeight * (coef/100);
 
  return (
      
    <div className="fucku">
       <div className="hide"> </div>
    <Swiper  slidesPerView={1} spaceBetween={0} autoplay={{  delay:8000,
                    disableOnInteraction: false}}
                ///loop ={true}
              slideActiveClass="swiper-slide-active"
              navigation={true} 
              speed={1}
            //   loop={true}
              
        
              onSlideChange={() => {

            //     tm.from('.slider-img',1,{
            //         delay:3000,

            //     x: -250,
            
              
            //   });

            //   tm.from('.slider-img',2,{
            //     delay:2000,
            //     x: -100,
            //     opacity:1
            //         });
        
                tm.from('.hide',2,{
                    
                height:vh(50),

              });
              tm.to('.hide',1,{
                
                height:vh(0),
                
            
              
              });

              }
              
              }
              className="mySwiper"
             >
            
          
            <SwiperSlide className="slide">
           
               <div className='slider-img'>
                    <img src="https://lh3.googleusercontent.com/u/0/d/1QGyflYPIcegtOOyddBUa-Z_Ij-Ni1b6_=w957-h882-iv1" alt=""/>
               </div>
        
            </SwiperSlide>
            <SwiperSlide  className="slide">
            
            <div className='slider-img'>
           
                    <img src="https://lh3.googleusercontent.com/u/0/d/1xwe51JhsyoxkSeHeTMMQMvswEzSbThEy=w1920-h902-iv1" alt=""/>
               </div>
            
            </SwiperSlide>
            <SwiperSlide className="slide">
            
            <div className='slider-img'>
           
                    <img src="https://lh3.googleusercontent.com/u/0/d/1ECb3GD5-xqiqFy7Rt1kIV1QnZqQkM9Gf=w957-h882-iv1" alt=""/>
               </div>
               
            </SwiperSlide>
    </Swiper>
    </div>
  )
}
 
export default PepsiSlider;