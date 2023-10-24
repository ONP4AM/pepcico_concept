import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import { AnimatePresence } from "framer-motion";
import "./styles/App.scss";
import Header from "./components/Header";
import Navigation from "./components/navigation";


import Products from "./pages/products";
import Diet from "./pages/diet";
import About from "./pages/about";
import Home from "./pages/home";
import ZeroSugerPe from "./pages/ZeroSugerPe";

const routes = [
  { path: "/", name: "home", Component: Home },
  { path: "/products", name: "product", Component: Products },
  { path: "/diet", name: "diet", Component: Diet },
  { path: "/about-us", name: "about", Component: About },
  { path: "/zero-suger", name: "zerosuger", Component: ZeroSugerPe },
  //{ path: "/case-studies/:id" , name:"caseStudies",Component: CaseStudies }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };  
  });
  return (
    <>
      <Header dimensions={dimensions} />
     
      <div className='App'>
      <AnimatePresence initial={true} exitBeforeEnter>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
          </AnimatePresence>
      </div>
    
      <Navigation />
      
    </>
  );
}

export default App;
