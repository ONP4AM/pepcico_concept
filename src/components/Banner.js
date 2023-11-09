import React from "react";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import backvideo from '../assets/video2.mp4'


const Banner = () => {
  return (
    <section className='main'>

<div style={{ position: 'relative' }}>
       <video src={backvideo} autoPlay loop muted style={{ width: '100%', opacity: 0.8 }} /> 

      {/* <img
        src="https://bemysocial.com/wp-content/plugins/phastpress/phast.php/c2VydmljZT1pbWFnZXMmc3JjPWh0dHBzJTNBJTJGJTJGYmVteXNvY2lhbC5jb20lMkZ3cC1jb250ZW50JTJGdXBsb2FkcyUyRjIwMjElMkYxMCUyRmFsYmVydG8tZ29uemFsZXotU3I1RzNwSG1McjgtdW5zcGxhc2guanBnJmNhY2hlTWFya2VyPTE2ODkwNzI5NzMtNTQ3NDA1JnRva2VuPWI3YzJkYjM5NzQ4OGYzNGQ.q.jpg" // Replace with the actual image source
        alt="Background Image"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      /> */}
    </div>
  
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
          {/* <div className='pepsi-bottol'>

            <img src="https://pepsicom-us-website-2017-production-public2.s3.amazonaws.com/en-us/uploads/images/pepsi-blue/pep-bl-bottle@3x.png"
            alt=""/>
          </div> */}
          <div className='btn-row'>
       
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
