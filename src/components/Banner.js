import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import backvideo from '../assets/video1.mp4'


const Banner = () => {
  return (
    <section className='main'>
       {/* <video src={backvideo} autoPlay loop muted />
   */}
      <div className='container'>
     
        <div className='row'>
  
          <h2>
            <div className='line'>
              <span>That's</span>
            </div>
            <div className='line'>
              <span>what I Like</span>
            </div>
          </h2> 
          <div className='pepsi-bottol'>
            
            <img src="https://pepsicom-us-website-2017-production-public2.s3.amazonaws.com/en-us/uploads/images/pepsi-blue/pep-bl-bottle@3x.png" 
            alt=""/> 
          </div>
          <div className='btn-row'>
            <a href='/'>
              More about us <RightArrow />
            </a>
          </div>
        
        </div>
      </div>
    </section>
  );
};

export default Banner;
