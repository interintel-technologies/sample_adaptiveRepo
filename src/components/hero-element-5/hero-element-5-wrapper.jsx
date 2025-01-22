import React, {  useEffect, useRef } from 'react';
import './hero-element-5';

const HeroElement5Wrapper = ({element}) => {
  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-5 id="hero-element-5" ref={heroElementRef}></hero-element-5> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement5Wrapper;
