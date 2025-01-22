import React, { useState, useEffect, useRef } from 'react';
import './hero-element-2';

const HeroElement2Wrapper = ({element}) => {
  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-2 id="hero-element-2" ref={heroElementRef}></hero-element-2> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement2Wrapper;
