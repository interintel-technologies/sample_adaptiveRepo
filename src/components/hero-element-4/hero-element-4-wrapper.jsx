import React, {  useEffect, useRef } from 'react';
import './hero-element-4';

const HeroElement4Wrapper = ({element}) => {
  
  const heroElementRef = useRef(null);

  useEffect(() => {
    if (heroElementRef.current && element) {
      heroElementRef.current.e = element
    }

  }, [element]);

  return (
    <div>
      
      {element ? <hero-element-4 id="hero-element-4" ref={heroElementRef}></hero-element-4> : <p>Loading data...</p>}

    </div>
  );
};

export default HeroElement4Wrapper;
