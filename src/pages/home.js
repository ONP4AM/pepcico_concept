import React, { useEffect, useState } from "react";
import IntroOverlay from "../components/introOverlay";
import Banner from "../components/Banner";
import Three from "../components/Three";
import ZeroSuger from "../components/ZeroSuger";
import gsap from "gsap";


let tl = gsap.timeline();


const homeAnimation = completeAnimation => {
  tl.from(".line span", 1.8, {
    y: 100,
    ease: "power4.out",
    delay: 1,
    //skewY: 7,
    stagger: {
      amount: 0.3
    }
  })
    .to(".overlay-top", 1.6, {
      height: 0,
      ease: "expo.inOut",
      stagger: 0.4
    })
    .to(".overlay-bottom", 1.6, {
      width: 0,
      ease: "expo.inOut",
      delay: -0.8,
      stagger: {
        amount: 0.4
      }
    })
    .to(".intro-overlay", 0, {
      css: { display: "none" }
    })
    .from(".case-image img", 1.6, {
      //scale: 1,
      y:1000,
      ease: "expo.inOut",
      delay: -2,
      stagger: {
        amount: 0.4
      },
      onComplete: completeAnimation
    })
    .from(".case-details h2",1.7, {
      opacity:0,
      ease: "expo.inOut",
    })
    .from('.pepsi-bottol',1.6,{
    
      y:100,
      rotate:60,

    })
};

const Home = ({ dimensions }) => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const completeAnimation = () => {
    setAnimationComplete(true);
  };

  useEffect(() => {
    homeAnimation(completeAnimation);
  }, []);

   useEffect(() => {
    let vh = dimensions.height * 0.01;
     document.documentElement.style.setProperty("--vh", `${vh}px`);
 }, [dimensions.width,dimensions.height]);

  return (
    <>
      {animationComplete === false ? <IntroOverlay /> : ""}
      <Banner />
      <ZeroSuger/>  
      <Three />
     
      {/* <Slider />  */}
    </>
  );
};

export default Home;
