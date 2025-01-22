import React, { useState, useEffect, useRef } from 'react';
import './hero-element-3';

const HeroElement3Wrapper = ({element}) => {
  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-3 id="hero-element-3" ref={heroElementRef}></hero-element-3> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement3Wrapper;
