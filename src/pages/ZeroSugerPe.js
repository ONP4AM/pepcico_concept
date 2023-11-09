
import React from "react";
//import Colors from '../components/Colors'
import DetailsThumb from '../components/DetailsThumb';

import { motion, useMotionValue, useTransform } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

class ZeroSugerPe extends React.Component {

  state = {
    products: [
      {
        "_id": "1",
        "title":[ 
                  "pepsi-zerosuger" ,
                  "pepsi",
                  "diet-pepsi",
                                   
                ],
        "src": [
          "https://lh3.googleusercontent.com/u/0/d/1ECb3GD5-xqiqFy7Rt1kIV1QnZqQkM9Gf=w957-h882-iv1",
          "https://lh3.googleusercontent.com/u/0/d/1QGyflYPIcegtOOyddBUa-Z_Ij-Ni1b6_=w957-h882-iv1",
          "https://lh3.googleusercontent.com/u/0/d/1xwe51JhsyoxkSeHeTMMQMvswEzSbThEy=w1920-h902-iv1",
         
          ],
        "calaries": ["0",
                      "150",
                      "0",
                      ],

        "totalFat":[
          "0",
          "0",
          "0",

        ],
        "sodium":[
          "40",
          "35",
          "40"
        ],
        "totalCarbohydrate" :["0","40","0"
      ],           
      "carbohydrate":[
        "0",
        "40",
        "0"
      ],
        "count": 1,
        "suger":["0",
                 "40",
                "0"   ],
        "background":["white","#0062b1","black"],
        "color":["white","#0062b1","white"]
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
    <div className='page'>
      <div className='container' >
       
        <div className='row'>
        {products.map(item =>(
          <div className='product-details' 
          key={item._id}
          style={{backgroundColor:item.background[index] }}
          > 
          
            <div className='product-img'>    
            <div className='pepsi-circle'></div>
            <motion.div 

            initial={{y:540 , x:798 ,scale:1}}
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
                  transition: { delay: 0.2, ...transition },
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
                <span>{item.calaries[index]}</span>
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
                <span>{item.suger[index]}</span>
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
                  transition: { delay: 0.2, ...transition },
                   opacity:1,
                   y:0
                 }}>
              <div className="detail-thumb" style={{backgroundColor:item.background[index] }} >
                <DetailsThumb     images={item.src} tab={this.handleTab} myRef={this.myRef} />
              </div>
              </motion.div>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  );
};
}

export default ZeroSugerPe;
