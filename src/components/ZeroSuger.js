import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from 'react-player'
import { TweenLite, Power3,TweenMax } from "gsap";

import useOnScreen from "../hooks/useOnScreen";
//import cn from "classnames";

function ZeroSuger() {
     const ref = useRef(null);

    const onScreen = useOnScreen(ref, 0.5);
    const swipeIn = ()=> {
        TweenMax.from(".zero-img",0,{
          
          x:0
        //console.log('hello baby')
        });
        TweenMax.to(".zero-img",1,{
          
            x:-500
          //console.log('hello baby')
          });
        console.log('hello baby')
      }
    useEffect(() => {
      if (onScreen) {
        //AOS.init({duration:2000});
          //AOS.refresh();
        swipeIn();    
      }

    }, [onScreen, ]);
  

 
    return (
        <div className="zero-container"  ref={ref} >
            <div className="zero-compromise">
                <div data-aos={"fade-out"} className="zero-title">
                   <img src="https://pepsicom-us-website-2017-production-public2.s3.amazonaws.com/en-us/uploads/images/PZS-headline.png" alt='/'/>
                </div>
                <div className="zero-video">
                    <ReactPlayer className='z-video'
                        width='100%'
                        height='100%'
                        controls
                        url="https://www.youtube.com/watch?v=7oBZ8sBjdyQ" />
                </div>
            </div> 
            
            <div className="zero-img" >
                <img src="https://pepsicom-us-website-2017-production-public2.s3.amazonaws.com/en-us/uploads/images/can-pzs.png" alt=""/>
            </div>
            
        </div>
    )
}

export default ZeroSuger
