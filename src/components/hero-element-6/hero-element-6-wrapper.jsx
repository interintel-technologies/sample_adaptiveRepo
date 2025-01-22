import React, {  useEffect, useRef } from 'react';
import './hero-element-6';

const HeroElement6Wrapper = ({element}) => {
  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-6 id="hero-element-6" ref={heroElementRef}></hero-element-6> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement6Wrapper;
