import React, { useEffect, useRef, useState } from "react";
//import { ReactComponent as productsNext } from "../assets/arrow-right.svg";
//import { ReactComponent as productsPrev } from "../assets/arrow-left.svg";
import { Link } from 'react-router-dom';
import { NavLink } from "react-router-dom";
import { TweenLite, Power3,TweenMax } from "gsap";
import useOnScreen from "../hooks/useOnScreen";
const Products = () => {

  return (
    <section className='products'>
      <div className='container-fluid'>
        <div className='products-navigation'>
          <div className='products-arrow prev disabled'>
            {/* <productsPrev /> */}
          </div>
          <div className='products-arrow next'>
            {/* <productsNext /> */}
          </div>
        </div>
        <div  className='svg-wave'> 
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
              <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                <use  xlinkHref="#gentle-wave" 
                      x="48" y="0" 
                      fill="rgba(255,255,255,0.7)"
                      />
                <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" transform="rotate(90)" />  
                </g>
                </svg>
          </div>
        <div className='row' >
            <div className='product pepsi'>
              <div className='product-details'>
              
                <h2>Pepsi</h2>
              </div>
              <Link to="/products">
              <div className='product-image pepsiNormal'>
                <img
                  
                   src= "https://lh3.googleusercontent.com/u/0/d/1QGyflYPIcegtOOyddBUa-Z_Ij-Ni1b6_=w957-h882-iv1"alt=''/>
              </div>
              </Link>
            </div>
            
            {/* pepsi  */}
          
            <div className='product diet-pepsi'> 
            
                <div className='product-details'>
                 
                  <h2 className="diet">Diet Pepsi</h2>
                </div>
                <Link to="diet">
                <div className='product-image'>
                  <img
                    
                    src= "https://lh3.googleusercontent.com/u/0/d/1xwe51JhsyoxkSeHeTMMQMvswEzSbThEy=w1920-h902-iv1"alt=''/>
                
                </div>
                </Link>
            </div>
             {/* pepsi  */}
            <div className='product pepsi-zero' >

              <div className='product-details'>
               
                <h2>Pepsi zero Suger</h2>
              </div>
              <Link to="/zero-suger">
              <div className='product-image'>
                
                <img
                  src= "https://lh3.googleusercontent.com/u/0/d/1ECb3GD5-xqiqFy7Rt1kIV1QnZqQkM9Gf=w957-h882-iv1"alt=''/>
              </div>
              </Link>
            </div>
             {/* pepsi  */}
             
        </div>
      </div>
    </section>
  );
};

export default Products;
