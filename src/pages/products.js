import React,{useEffect} from "react";
//import Colors from '../components/Colors'
import DetailsThumb from '../components/DetailsThumb';
import gsap from "gsap";

import { motion, useMotionValue, useTransform } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
let tl = gsap.timeline();

class Products extends React.Component {
  componentDidMount() {
    tl.to(".hide-block-h2", 0.5, {
      
      y:200,
      opacity:0,
    });
    tl.to(".hide-block", 1, {
    
      height:0,
      stagger: 0.1
      
    });
    tl.to(".hide-container", 1, {
    
      height:0
    });
   
    console.log('hellwo')  
  }

  state = {

    products: [
      {
        "_id": "1",
        "title":[
                  "pepsi",
                  "diet-pepsi",
                  "pepsi-zerosuger"                  
                ],
        "src": [
          "https://lh3.googleusercontent.com/u/0/d/1QGyflYPIcegtOOyddBUa-Z_Ij-Ni1b6_=w957-h882-iv1",
          "https://lh3.googleusercontent.com/u/0/d/1xwe51JhsyoxkSeHeTMMQMvswEzSbThEy=w1920-h902-iv1",
          "https://lh3.googleusercontent.com/u/0/d/1ECb3GD5-xqiqFy7Rt1kIV1QnZqQkM9Gf=w957-h882-iv1",
          ],
        "calaries": ["100",
                      "0",
                      "0",
                      ],

        "totalFat":[
          "0",
          "0",
          "0",

        ],
        "sodium":[
          "30",
          "35",
          "40"
        ],
        "totalCarbohydrate" :["41","0","0"
      ],           
      "carbohydrate":[
        "14",
        "0",
        "0"
      ],
        "count": 1,
        "suger":["41",
                 "0",
                "0"   ],
        "sugerInclude":[
          "0",
          "0",
          "0"
        ],
        "background":["white","#0062b1","black"],
        "colors" : ["white","#0062b1","black"]
      }
    ],
    index: 0
  };
  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
   
    }
    images[index].className = "active";
    //openMenu();
    
  };
  
  
  render(){
  
    const {products, index} = this.state;
  return (
    <motion.div
      onAnimationComplete={() => console.log("animation done")}
      className='single'
      initial='initial'
      animate='animate'
      exit='exit'>
    <div className='page'>

  
      <div className='container'>
    
        <div className='row'>
       
        {products.map(item =>(
          <div className='product-details'
          key={item._id}
          style={{backgroundColor:item.background[index] }}
          > 
             <div className="hide-container">
               <div className="hide-block">
                 <h2 className= "hide-block-h2"
                  style={{color:item.colors[index] }}
                 >Pepsi</h2>
               </div>
               <div className="hide-block">
                 <h2 className="hide-block-h2"
                   style={{color:item.colors[index] }}
                 >Diet Pepsi</h2>
                 
               </div>
               <div className="hide-block">
                 <h2 className="hide-block-h2"
                     style={{color:item.colors[index] }}
                 >Pepsi zero Suger</h2>
               </div>
             </div>
   
             <motion.div 

                
                animate ={{
                  transition: { delay: 0.1, ...transition },
                  y:400 ,
                  opacity:0,
              
                }}

                >
                    <div className="pepsi-hide">
                      <img src= "https://lh3.googleusercontent.com/u/0/d/1xwe51JhsyoxkSeHeTMMQMvswEzSbThEy=w1920-h902-iv1"alt=''/>
                    </div>
              </motion.div>
              <motion.div 

                              
                animate ={{
                  transition: { delay: .1, ...transition },
                  y:-400 ,
                  opacity:0,                  
                }}
                >
                    <div className="pepsiZero-hide">
                      
                      <img src= "https://lh3.googleusercontent.com/u/0/d/1ECb3GD5-xqiqFy7Rt1kIV1QnZqQkM9Gf=w957-h882-iv1"alt=''/>
                    </div>
              </motion.div>
              <div className='product-img'>  
              <motion.div
                 initial={{opacity:0 ,}}
                 animate ={{
                  transition: { delay: 2, ...transition },
                   opacity:1 ,
                 }}
                 >  
              <div className='pepsi-circle'></div>
              </motion.div>
              <motion.div 

            initial={{y:300 , x:-200 ,scale:0.8}}
            animate ={{
              transition: { delay: 0.2, ...transition },
              y:0 ,x:0,scale:1,
              
            }}
           
            >
                  <img src={item.src[index]}  alt="" />
            </motion.div>
            </div>
           
            <div className='nutrition-fact'>
              <motion.div
                 initial={{opacity:0}}
                 animate ={{
                  transition: { delay: 2, ...transition },
                   opacity:1
                 }}>
              <div className='nutrition-container'>
              <h1>Nutrition Facts</h1>
              <h3>1 serving per container</h3>
              <h2 className='serving'>
                <span>Serving Size</span>
                <span>12 fl oz (360ml)</span>
              </h2>
              <h2 className="calories">
                <span>Calories</span>
                <span>100</span>
              </h2>
              <h6 className="daily-value">
                  % Daily Value*
              </h6>
              <h5>
                <span>Total Fat <small>{item.totalFat[index]}g</small></span>
                <span>0%</span>
              </h5>
              <h5>
                <span>Sodium <small>{item.sodium[index]}mg </small></span>
                <span>1%</span>
              </h5>
              <h5>
                <span>Total Carbohydrate <small>{item.totalCarbohydrate[index]}g </small></span>
                <span>{item.carbohydrate[index]} %</span>
              </h5>
              <h5>
                <span>Total Sugars <small>{item.suger[index]}g </small></span>
              </h5>
              <h5>
                <span>Includes <small>26g Added Suger</small></span>
                <span>{item.sugerInclude[index]}</span>
              </h5>
              <h5>Protine <smal>0g</smal></h5>
              <h6 className="source1">Not a significant source of other nutrients.</h6>
              <h6 className="source">*%DV = % Daily Value</h6>
              </div>
              </motion.div>
            </div>
                 
            <div className='more-info'>
            <motion.div
                 initial={{opacity:0}}
                 animate ={{
                  transition: { delay: 0.2, ...transition },
                   opacity:1
                 }}>
              <div className="info-title">
                <h1>{item.title[index]} </h1>
              </div>
             </motion.div>
            </div>
            <div className='select-product'>
            <motion.div
                 initial={{opacity:0,
                          y:300
                
                          }}
                 animate ={{
                  transition: { delay: 0.4, ...transition },
                   opacity:1,
                   y:0
                 }}>
              <div className="detail-thumb">
                <DetailsThumb  images={item.src} tab={this.handleTab} myRef={this.myRef} />
              </div>
              </motion.div>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
    </motion.div>
  );
};
}

export default Products;
